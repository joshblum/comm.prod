from commProd.models import *

from django.template import RequestContext
from django.shortcuts import render_to_response, HttpResponse
from django.contrib.auth.models import User
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.utils import simplejson as json

from helpers.commprod_search import commprod_search
from common.constants import REGEX

from datetime import date, datetime, timedelta
import random, re

def getRandomUsername(user):
    """
    Returns a username to be rendered choosing randomly between
    first + last, username, and a shirt first_name.
    """
    potentials = [shirtname.name for shirtname in ShirtName.objects.filter(user_profile=user.profile)]

    name = user.first_name.strip()
    if (name != ""):
        potentials.append(name)
    else:
        potentials.append(user.username)
    return random.choice(potentials)

def renderErrorMessage(request, hero_title, page_title='Oops'):
    """
    Give helpful messages for the retards.
    Returns a hero_err_template with the given data.
    Return this function to give user back an error page.
    """
    if request.user.is_authenticated:
        prof_href = "user/" + request.user.username
    else:
        prof_href = "/"
    template_values = {
        'page_title': page_title,
        'user_profile' : prof_href,
        'hero_err_title' : hero_title,
    }
    return render_to_response('snippets/hero_err_template.html',
        template_values, context_instance=RequestContext(request))

def possesive(name, title):
    """
    Returns proper ingrish for user profile page
    """
    if unicode(name)[-1] == 's':
        result = "%s' " % name
    else:
        result = "%s's " % name
    if title == "":
        title = " Profile"
    return result + title.capitalize()


def addUserToQuery(request_dict, username):
    """
    Adds the specified username to the given dictionary
    """
    d = {}
    for key, value in request_dict.items():
        d[key] = value
    d['username'] = username
    return d

def vote_commprod(id, score, user):
    """
    Submit vote for a commprod
    """
    success, commprod = valid_prod(id)
    if not success:
        return success, commprod #False, False

    rating, created = Rating.objects.get_or_create(commprod=commprod, user_profile=user.profile)

    return rating, commprod

def fav_commprod(id, user):
    """
    Submit favorite for a commprod
    """
    success, commprod = valid_prod(id)
    if not success:
        return success, commprod #False, False
    fav, created = Favorite.objects.get_or_create(commprod=commprod, user_profile=user.profile)

    return fav

def valid_prod(id):    
    """
    Helper function to valididate commprod for vote or favoriteing
    """
    commprod = commprod_search(cp_id=id)
    if commprod.count() != 1: #make sure commprod is there
        return False, False
    return True, commprod[0]

def vote_correction(id, score, user):
    """
    Submit vote for a correction
    """
    correction = Correction.objects.filter(id=id)
    if not correction.exists():
        return False, False

    rating, created = CorrectionRating.objects.get_or_create(correction=correction[0], user_profile=user.profile)
    return rating, correction[0]

def JSONResponse(payload):
    """
    Helper to return HttpResponse with json type
    json.dumps the payload given
    """
    return HttpResponse(json.dumps(payload), mimetype='application/json')

def validateEmail(email):
    try:
        validate_email(email)
        return True
    except ValidationError:
        return False

def get_floor_percentile(profile):
    everyone = float(UserProfile.objects.all().count())
    worse = float(UserProfile.objects.filter(score__lt = profile.score).count())
    return int(worse/everyone*100 + .5)

def get_day_trend(profile, num_days=30):
    time_threshold = datetime.now() - timedelta(days=num_days)
    trend_points = TrendData.objects.filter(date__gt=time_threshold, user_profile=profile)
    if trend_points.exists():
      old_score = trend_points[0].score
    else:
      old_score = 0
    return profile.score - old_score
