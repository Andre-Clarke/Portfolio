from django.shortcuts import render
from rest_framework import generics
from .models import GuestBookPost
from .serializers import GuestBookPostSerializer


class GuestBookPostListCreate(generics.ListCreateAPIView):
    queryset = GuestBookPost.objects.all()
    serializer_class = GuestBookPostSerializer
    