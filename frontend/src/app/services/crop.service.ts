import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../models/crop.model';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getAllCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>(`${this.apiUrl}/crops`);
  }

  getCropData(cropId: number): Observable<any> {
    console.log("rew sent")
    return this.http.get<Crop[]>(`${this.apiUrl}/crops/img/${cropId}`);
  }

}
