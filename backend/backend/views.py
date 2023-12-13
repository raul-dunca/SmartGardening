from rest_framework.response import Response
from rest_framework.views import APIView
from backend.model import Crop, Coordinate
from backend.serializers import CropSerializer, CoordsSerializer


# get all the crops
# serialize them
# return response


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