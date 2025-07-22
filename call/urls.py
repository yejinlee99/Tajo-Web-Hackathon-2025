from django.urls import path
from . import views

urlpatterns = [
    path('where_to/', views.where_to, name='where_to'),  # call 홈화면 url
    path('set_people/', views.set_people, name='set_people'),  # 인원 설정 url
    path('waiting/', views.waiting, name='waiting'),  # 호출 대기 화면 url
    path('select_vehicle/', views.select_vehicle, name='select_vehicle'),  # 차량 선택 화면 url
    path('assigned_vehicle/', views.assigned_vehicle, name='assigned_vehicle'),  # 배차된 차량 화면 url
    path('cancel_call/', views.cancel_call, name='cancel_call'),  # 호출 취소 화면 url
]