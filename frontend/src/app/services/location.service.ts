import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crop } from '../models/crop.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedCropSubject = new BehaviorSubject<google.maps.LatLngLiteral[][]>([]);
  selectedCrop$ = this.selectedCropSubject.asObservable();
  
  constructor() { }

  getAreaFromCrop(crop: Crop): google.maps.LatLngLiteral[][] {
    return [
      [
        { lat: 45.4268, lng: 23.1025 },
        { lat: 44.4231, lng: 26.1063 },
        { lat: 46, lng: 28 },
      ],
      [
        { lat: 47.4268, lng: 27.1025 },
        { lat: 44.4231, lng: 26.1063 },
        { lat: 46, lng: 28 },
        { lat: 46, lng: 28 },
      ]
      // Add more polygons as needed
    ];
  }

  selectCrop(crop: Crop | null): void {
    var area: google.maps.LatLngLiteral[][];
    if (crop !== null) { area = this.getAreaFromCrop(crop); }
    else {
      area = [];
    }
    this.selectedCropSubject.next(area);
  }
}
