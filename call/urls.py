from django.urls import path
from . import views

urlpatterns = [
    path('', views.where_to, name='where_to'),  # call 홈화면 url
]