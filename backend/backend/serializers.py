from rest_framework import serializers

from backend.model import Crop, Coordinate


#python -> json

class CoordsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Coordinate
        fields=['latitude','longitude']


class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model=Crop
        fields=['id','type']


class CropsSerializerDetails(serializers.ModelSerializer):
    coords = CoordsSerializer(many=True, read_only=True)
    class Meta:
        model=Crop
        fields=['id','type','best_temperature','best_soil_type','coords']



