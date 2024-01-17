import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';
import { CropService } from 'src/app/services/crop.service';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrl: './crop-card.component.scss'
})
export class CropCardComponent {
  @Input() selected: boolean = false;
  @Input() crop !: Crop;
  @Output() cropSelected = new EventEmitter<Crop | null>();

  constructor(){}

  onClick(): void {
    this.crop.isSelected = !this.crop.isSelected;
    this.cropSelected.emit(this.crop);
  }
}
