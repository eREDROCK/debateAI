from django.urls import path, include
from .views import RandomThemeAPI


urlpatterns = [
    path('randomtheme/', RandomThemeAPI.as_view()),
]
