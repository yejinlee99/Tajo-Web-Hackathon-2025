from django.urls import path
from . import views

urlpatterns = [
    path('', views.mypage_home, name='mypage_home'),  # mypage 홈화면 url
    path('update/', views.update_mypage, name='update_mypage'),  # mypage 정보수정 url
    path('card/', views.card, name='card'),  # mypage 카드관리 url
    path('bookmark/', views.bookmark, name='bookmark'),  # mypage 즐겨찾기 url
    path('history/', views.history, name='history'),  # mypage 이용기록 url
    path('notice/', views.notice, name='notice'),  # mypage 공지사항 url
    path('qna/', views.qna, name='qna'),  # mypage 고객문의 url
]