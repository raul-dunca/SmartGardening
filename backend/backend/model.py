from django.db import models



class Crop(models.Model):
    type=models.CharField(max_length=50)
    best_temperature=models.FloatField()
    best_soil_type=models.CharField(max_length=50)
    def __str__(self):
        return f"{self.type}"

class Coordinate(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE,related_name='coords')
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.latitude} {self.longitude}"







