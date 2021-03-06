from django.core.management.base import NoArgsCommand

from helpers.urlize_tags import commprod_contains_media
from helpers.urlize_tags import urlize_text
import commProd.models as cpm


class Command(NoArgsCommand):
  help = """
        Detects if a commprod contains media
        (url, img, youtube video) and updates the column
         appropiately.
        """

  def handle(self, **options):
    self.stdout.write('Starting...\n')
    commprods = cpm.CommProd.objects.all()
    for commprod in commprods.iterator():
      media = commprod_contains_media(commprod.content)
      self.stdout.write("""Updating commprod id
             %(id)s, media? %(media)s\n""" % {
          'id': commprod.id,
          'media': media
      })
      commprod.media = media
      if media:  # write the media content
        commprod.media_content = urlize_text(
            commprod.content)
      commprod.save()
    self.stdout.write('Done.\n')
