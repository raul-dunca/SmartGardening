from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.model import Crop, Coordinate
from backend.serializers import CropSerializer, CoordsSerializer, CropsSerializerDetails, CropsSerializerImage


# get all the crops
# serialize them
# return response
#


class CropsList(APIView):
    def get(self,request):
        crops = Crop.objects.all()
        serializer = CropSerializer(crops, many=True)
        return Response(serializer.data)

class CoordsList(APIView):
    def get(self,request):
        coords = Coordinate.objects.all()
        serializer = CoordsSerializer(coords, many=True)
        return Response(serializer.data)


class CropsDetails(APIView):
    def get_object(self,id):
        try:
         return Crop.objects.get(pk=id)
        except Crop.DoesNotExist:
            raise Http404

    def get(self,request,id):
        crop=self.get_object(id)
        serializer = CropsSerializerDetails(crop)
        return Response(serializer.data)


class CropsImage(APIView):
    def get_object(self,id):
        try:
         return Crop.objects.get(pk=id)
        except Crop.DoesNotExist:
            raise Http404

    def get(self,request,id):
        crop=self.get_object(id)
        serializer = CropsSerializerImage(crop)
        return Response(serializer.data)