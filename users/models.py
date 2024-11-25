from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):
    is_author = models.BooleanField(default=False)#when it's clicked (it set to true )
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email" #email as a unique identify for authentication

    REQUIRED_FIELDS = ["is_author"]
    
    def __str__(self):
        return self.email