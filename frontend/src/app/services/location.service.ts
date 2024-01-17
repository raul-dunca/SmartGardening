import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crop } from '../models/crop.model';
import { CropService } from './crop.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedCropSubject = new BehaviorSubject<Crop|null>(null);
  selectedCrop$ = this.selectedCropSubject.asObservable();
  optionRand:boolean=true;
  
  constructor(private cropService: CropService) { }


  selectCrop(crop: Crop | null): void {
    this.selectedCropSubject.next(crop);
  }
}
