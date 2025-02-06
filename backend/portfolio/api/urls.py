from django.urls import path
from . import views

urlpatterns = [
    path('guestbook/', views.GuestBookPostListCreate.as_view(), name="guestbook-view-create")
] 