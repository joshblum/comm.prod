from commProd.models import CommProd, Rating, UserProfile, TrendData, ShirtName, Correction, CorrectionRating, CommProdEmail
from django.contrib import admin

admin.site.register(CommProd)
admin.site.register(CommProdEmail)
admin.site.register(Rating)
admin.site.register(UserProfile)
admin.site.register(TrendData)
admin.site.register(ShirtName)
admin.site.register(Correction)
admin.site.register(CorrectionRating)