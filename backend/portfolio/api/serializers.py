from rest_framework import serializers
from .models import GuestBookPost

class GuestBookPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestBookPost
        fields = ['id','name','relation','post','time']
