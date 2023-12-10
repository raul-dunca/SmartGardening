import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  options!: any;
  polygons: google.maps.LatLngLiteral[][] = [
    [
      { lat: 45.4268, lng: 23.1025 },
      { lat: 44.4231, lng: 26.1063 },
      { lat: 46, lng: 28 },
    ],
    [
      { lat: 47.4268, lng: 27.1025 },
      { lat: 44.4231, lng: 26.1063 },
      { lat: 46, lng: 28 },
    ]
    // Add more polygons as needed
  ];

  greenAreaOptions: google.maps.PolygonOptions = {
    fillColor: '#006000', // Set the fill color to green
    strokeColor: '#006000', // Set the border color to white
    strokeWeight: 1, // Set the border weight
    fillOpacity: 1
  };

  ngOnInit(): void {
    this.initializeOptions();
  }

  initializeOptions(): void {
    this.options = {
      zoom: 6.80,
      center: { lat: 45.9432, lng: 24.9668 },
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      backgroundColor: 'white',
      disableDefaultUI: true,
      draggable: false,
      scaleControl: false,
      scrollwheel: false,
      gestureHandling: "none",
      zoomControl: false,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "on" },
            { "saturation": 50 }, // Set the saturation to -50 for reduced color intensity
            { "lightness": 60 }, // Set the lightness to 50 for increased brightness
            { "gamma": 0.9 }
          ]
        }, {
          "featureType": "landscape",
          "stylers": [
            { "visibility": "on" },
            { "saturation": -60 }, // Set the saturation to -50 for reduced color intensity
            { "lightness": 0 }, // Set the lightness to 50 for increased brightness
            { "gamma": 0.6 }
          ]
        }, {
          "featureType": "road",
          "stylers": [
            { "visibility": "off" }
          ]
        }, {
          "featureType": "administrative",
          "stylers": [
            { "visibility": "off" }
          ]
        }, {
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        }, {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "on" }, // Show administrative.country elements
            { "fillColor": "#008000" }, // Set the fill color to green for Romania
            { "strokeColor": "#40362F" }, // Set the border color to white
            { "weight": 1.5 } // Set the border weight
          ]
        }
      ]
    };
  }

  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }
}
