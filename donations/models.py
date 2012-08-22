from django.db import models
from commProd.models import UserProfile

class Donation(models.Model):
    user_profile = models.ForeignKey(UserProfile)

    is_anonymous = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now=True)
    amount = models.FloatField(default=0.0)
    reason = models.TextField()

    def __unicode__(self):
        return 'Donation of $%s by %s on %s for %s' % (self.amount, self.user_profile.user.username, str(self.date, self.reason))