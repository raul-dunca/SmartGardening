from django.db import models



class Crop(models.Model):
    type=models.CharField(max_length=50,unique=True)
    #image = models.ImageField(upload_to='images/', blank=True, null=True)
    image = models.BinaryField(blank=True, null=True)

    def __str__(self):
        return f"{self.type}"

class Coordinate(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE,related_name='coords')
    latitude = models.FloatField()
    longitude = models.FloatField()
    area = models.FloatField()

    def __str__(self):
        return f"{self.latitude} {self.longitude} and area {self.area} "






