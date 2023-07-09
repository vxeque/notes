from django.db import models

# Create your models here.
class Notes(models.Model): 
    title = models.CharField(max_length=1000)
    description = models.TextField(blank=True)

    def __str__(self): 
        return self.title

