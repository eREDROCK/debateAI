from django.urls import path, include
from .views import RandomThemeAPI
from .views import DebateAPI


urlpatterns = [
    path('randomtheme/', RandomThemeAPI.as_view()),
    path('debate/', DebateAPI.as_view()),
]
