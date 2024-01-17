import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { DomSanitizer } from '@angular/platform-browser';
import { CropService } from 'src/app/services/crop.service';
import { LocationService } from 'src/app/services/location.service';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'], animations: [
    trigger('fadeInOut', [
      transition(':increment', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':decrement', [
        animate('0.5s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MapComponent implements OnInit {
  options!: any;
  imageUrl: any;
  showFadeOverlay: boolean = false;
  constructor(private locationService: LocationService, private sanitizer: DomSanitizer, private cropService: CropService) { }

  ngOnInit(): void {

    this.initializeMap();


    this.locationService.selectedCrop$.subscribe((crop) => {
      console.log('Selected Crop changed:', crop);
      if (crop?.id) {
        this.showFadeOverlay = true;
        this.cropService.getCropData(crop?.id!).subscribe(data => {
          let blobUrl = 'data:image/jpeg;base64,' + data.image;
          this.imageUrl = null;
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
          // setTimeout(() => {
          //   this.showFadeOverlay = false; // Hide the overlay
          // }, 5000);

        })
      }

    });
  }


  initializeMap() {
    this.cropService.getCropData(3).subscribe(data => {
      let blobUrl = 'data:image/jpeg;base64,' + data.image;
      this.imageUrl = null;
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
    })
  }


  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }
}
