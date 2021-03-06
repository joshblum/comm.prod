from django.db.models import Sum

import commProd.models as cpm
from commprod_search import commprod_search

from helpers.renderers import commprod_renderer, \
    profile_renderer, correction_renderer

from datetime import datetime
import time
import numpy as np


def commprod_query_manager(get_dict, user, return_type='html'):
  """
      Takes in a get request's dictionary of
      values and returns an HTMl template based
      on the search query
  """
  valid_params = ['cp_id', 'query', 'direction',
                  'username', 'startDate', 'endDate',
                  'limit', 'unvoted', 'orderBy', 'rec']
  valid_types = {
      'best': {
          'orderBy': 'score',
          'direction': 'lh',
      },
      'worst': {
          'orderBy': 'score',
      },
      'recent': {
          'orderBy': 'date',
          'direction': 'lh',
      },
      'trending': {
          'orderBy': 'trending_score',
          'direction': 'lh',
      },
      'media': {
          'orderBy': 'date',
          'media': True,
          'direction': 'lh',
      },
  }

  search_params = {k: v for k, v in get_dict.items()
                   if k in valid_params}

  # overwrite given parameters with default for type.
  type = get_dict.get('type', None)
  if type in valid_types:
    search_params = dict(search_params, **valid_types[type])

  if 'unvoted' in search_params:
    search_params['unvoted'] = user.username

  # if 'rec' in search_params:
  #     search_params['rec'] = user.username

  if type == 'favorites':
    # user who's profile is being viewed
    commprods = get_commprod_favs(get_dict['username'])

  else:
    commprods = commprod_search(**search_params)

  return commprod_renderer(user, commprods,
                           return_type, type, get_dict.get('page', 1))


def profile_query_manager(user, profile_user):
  """
      Handles queries for user data to be
      displayed on profile page.
  """

  best_prod, worst_prod = find_profile_prods(
      user, profile_user)

  most_loved, most_hated = find_profile_faves(profile_user)

  response = {
      'best_prod': best_prod,
      'worst_prod': worst_prod,
      'most_loved': most_loved,
      'most_hated': most_hated,
  }
  return response


def vs_data_manager(user, filter_year=None):
  """
      Returns a dictionary of data needed for graphing
      data with the given filter. Returns data_points for
      graphing, std, mean, and a grade for the given user.
  """
  profiles = cpm.UserProfile.objects.all()
  if filter_year:
    profiles = profiles.filter(class_year=filter_year)
  score_dict = {}
  for profile in profiles:
    score = profile.score
    if score in score_dict:
      score_dict[score] += 1
    else:
      score_dict[score] = 1

  std = np.std(np.array(score_dict.keys()))
  mean = np.mean(np.array(score_dict.keys()))
  grade = get_grade(user.profile.score, std, mean)
  vs_data = {
      'data_points': score_dict.items(),
      'std': std,
      'mean': mean,
      'grade': grade,
  }

  return vs_data


def trend_data_manager(user):
  """
      Calculates trend data and returns response
      dictionary for given User object
  """
  try:
    first_trend_date = cpm.TrendData.objects.filter(
        user_profile=user.profile).order_by('date')[0].date
  except IndexError:
    first_trend_date = datetime.now()

  trend_query_all = cpm.TrendData.objects.filter(
      date__gt=first_trend_date)
  trend_query_class = trend_query_all.filter(
      user_profile__class_year=user.profile.class_year)
  trend_query_user = trend_query_class.filter(
      user_profile=user.profile)
  trend_data = {
      'floor_trend': get_trend_data(trend_query_all),
      'class_trend': get_trend_data(trend_query_class),
      'user_trend': get_trend_data(trend_query_user),
  }
  return trend_data


def correction_query_manager(user, correction_id=None,
                             commprod=None):
  """
      Finds and renders active corrections
      for the given commprod
  """
  corrections = None
  if correction_id:
    corrections = cpm.Correction.objects.filter(
        id=correction_id, is_active=True)

  elif commprod:
    corrections = cpm.Correction.objects.filter(
        commprod=commprod, is_active=True)

  if corrections and corrections.exists():
    return correction_renderer(user, corrections)
  else:
    return []


def get_commprod_favs(username):
  """
    Finds and returns a list of commprod
    objects that have been favorited by the given user
  """
  favs = cpm.Favorite.objects.filter(
      user_profile__user__username=username,
      fav=True).select_related()
  commprods = []
  for fav in favs:
    commprods.append(fav.commprod)
  return commprods

# ########## Helpers #############


def find_profile_prods(user, profile_user):
  """
      Finds the best and worst commprods
      for a given profile if they exist.
      If none exists boolean is sent back and nothing is
      rendered.
  """
  if cpm.CommProd.objects.filter(
          user_profile=profile_user.profile).exists():
    sorted_commprods = cpm.CommProd.objects.filter(
        user_profile=profile_user.profile
    ).order_by('score')
    count = sorted_commprods.count()

    if count == 0:
      return False, False

    worst_prod = sorted_commprods[0]
    best_prod = sorted_commprods[count - 1]

    # render html
    best_prod, worst_prod = commprod_renderer(
        user, [best_prod, worst_prod], 'list')
  else:
    best_prod = False
    worst_prod = False

  return best_prod, worst_prod


def find_profile_faves(profile_user):
  """
      Finds the highest and least rated bomber from the
      given user. Returns a rendered list of highest and
      lowest profiles found.
  """

  sorted_users = cpm.Rating.objects.filter(
      user_profile=profile_user.profile).values(
      'commprod__user_profile').order_by(
      'commprod__user_profile').annotate(
      total=Sum('score')).order_by('total')

  try:
    most_hated = cpm.UserProfile.objects.exclude(
        user__username="paigef"
    ).exclude(user__username="paige@finkelstein.us"
              ).get(
        id=sorted_users[0]['commprod__user_profile'])
    most_loved = cpm.UserProfile.objects.exclude(
        user__username="paigef"
    ).exclude(user__username="paige@finkelstein.us"
              ).get(
        id=sorted_users.reverse()[0]['commprod__user_profile'])

  except:
    most_loved = cpm.UserProfile.objects.order_by('?')[0]
    most_hated = cpm.UserProfile.objects.order_by('?')[0]

  return profile_renderer([most_loved, most_hated])


def get_grade(user_score, std, mean):
  """
      Returns a letter grade for a given score,
      std, and mean.
      This is the worst code ever.
  """
  letters = ['A', 'B', 'C', 'D', 'F']
  grades = []
  scores = []
  curr_std = 1.33
  diff = 0.33

  if std == 0 or user_score == mean:
    return 'B'

  # make grades
  for letter in letters:
    grades.append('%s+' % letter)
    scores.append(mean + std * curr_std)
    curr_std -= diff

    grades.append(letter)
    scores.append(mean + std * curr_std)
    curr_std -= diff

    grades.append('%s-' % letter)
    scores.append(mean + std * curr_std)
    curr_std -= diff

  scores.append(user_score)
  scores.sort()
  grades.reverse()

  index = max(0, scores.index(user_score) - 1)
  return grades[index]


def get_trend_data(query_set):
  """
      Helper for trend data manager.
      Returns a list of data point tuples
  """
  return [(time.mktime(trend.date.timetuple()) * 1000,
           trend.score) for trend in query_set]
