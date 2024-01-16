import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
import django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()
from backend.model import Crop, Coordinate

desired_crop_type = 'Corn'

# Retrieve the specific Crop instance
retrieved_crop = Crop.objects.get(type=desired_crop_type)

# Filter the coordinates based on the retrieved crop
queryset = Coordinate.objects.filter(crop=retrieved_crop)

df = pd.DataFrame.from_records(queryset.values('latitude', 'longitude', 'area'))


import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap
import numpy as np

# Assuming 'plotting_df' is your DataFrame with 'Latitude', 'Longitude', and 'TabNet_predicted_area' columns
# Example: plotting_df = pd.DataFrame({'Latitude': [lat_values], 'Longitude': [long_values], 'TabNet_predicted_area': [area_values]})

# Create a Basemap object
m = Basemap(
    projection='merc',  # Mercator projection
    llcrnrlat=df['latitude'].min() - 1,  # Set the map boundaries based on your data
    urcrnrlat=df['latitude'].max() + 1,
    llcrnrlon=df['longitude'].min() - 1,
    urcrnrlon=df['longitude'].max() + 1,
    resolution='l'  # Set the map resolution ('l' for low)
)

radius = np.sqrt(df['area']) / 10

# Create a figure and axis
fig, ax = plt.subplots(figsize=(12, 8))

# Draw map details
m.drawcoastlines()  # Draw coastlines
m.drawcountries()   # Draw countries
m.drawstates()      # Draw states
m.fillcontinents(color='lightgray', lake_color='aqua')  # Fill continents with a color
m.drawmapboundary(fill_color='aqua')  # Fill the globe with a color (for oceans)

# Convert latitude and longitude to map coordinates
x, y = m(df['longitude'].values, df['latitude'].values)

# Scatter plot with circles
m.scatter(x, y, s=radius, c='blue', alpha=0.3)

image_filename = f"{desired_crop_type.lower()}_image.png"
image_path = os.path.join('images', image_filename)
plt.savefig(image_path)
plt.close()


with open(image_path, "rb") as image_file:
    retrieved_crop.image = image_file.read()

retrieved_crop.save()