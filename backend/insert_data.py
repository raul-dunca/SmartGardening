# insert_data.py

import os
import django
from django.db import transaction


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

# Your list of data
data_list = [[9, ]]

from backend.model import Crop, Coordinate
@transaction.atomic
def insert_data():
    try:
        for sublist in data_list:
            crop_id = sublist[0]
            try:
                crop_instance = Crop.objects.get(id=crop_id)
            except Crop.DoesNotExist:
                print(f"Error: Crop with ID {crop_id} does not exist.")
                continue

            for data_tuple in sublist[1:]:
                Coordinate.objects.create(crop=crop_instance, latitude=data_tuple[0], longitude=data_tuple[1], area=data_tuple[2])

        print("Data inserted successfully!")

    except Exception as e:
        print("Error:", e)

insert_data()
