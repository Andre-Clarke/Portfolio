from django.db import models

# Create your models here.
class GuestBookPost(models.Model):
    name = models.CharField(max_length=64)
    relation = models.CharField(max_length=64)
    post = models.CharField(max_length=512)
    time = models.DateTimeField(auto_now_add=True)
    posted = False

    def __str__(self):
        return self.post
    