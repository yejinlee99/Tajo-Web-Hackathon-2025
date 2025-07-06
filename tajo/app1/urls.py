from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # 기본 URL
    path('about/', views.about, name='about'),  # about 페이지
]