import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';
import { CropService } from 'src/app/services/crop.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-search-drawer',
  templateUrl: './search-drawer.component.html',
  styleUrl: './search-drawer.component.scss'
})
export class SearchDrawerComponent implements OnInit {

  crops!: Crop[];

  selectedCropNumbers: number = 0;

  constructor(private cropService: CropService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.cropService.getAllCrops().subscribe(crops => {
      crops.forEach(crop => {
        if (crop.id === 3) crop.isSelected = true;
        else crop.isSelected = false
      });
      this.crops = crops;
    });
  }

  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }

  onCropSelected(crop: Crop | null) {
    if (crop != null) {
      this.deselectAllOtherCrops(crop);
      console.log(this.crops);
      this.selectedCropNumbers++;
    }
    console.log("crop " + crop)
    this.locationService.selectCrop(crop);
  }

  deselectAllOtherCrops(crop: Crop) {
    this.crops.forEach(c => {
      if (c.id != crop.id) {
        c.isSelected = false;
      }
    })
  }
}
