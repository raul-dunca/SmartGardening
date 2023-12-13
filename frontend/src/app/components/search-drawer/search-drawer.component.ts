import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';
import { CropService } from 'src/app/services/crop.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-search-drawer',
  templateUrl: './search-drawer.component.html',
  styleUrl: './search-drawer.component.scss'
})
export class SearchDrawerComponent implements OnInit{

  crops!:Crop[];

  selectedCropNumbers:number=0;

  constructor(private cropService:CropService,private locationService:LocationService){}

  ngOnInit(): void {
    this.cropService.getAllCrops().subscribe(crops=>this.crops=crops);
  }

  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }

  onCropSelected(crop:Crop | null){
    if(crop!=null){
      this.selectedCropNumbers++;
    }
    this.locationService.selectCrop(crop);
  }
}
