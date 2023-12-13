import { Component, EventEmitter, Output } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrl: './crop-card.component.scss'
})
export class CropCardComponent {
  selected: boolean = false;
  crop !: Crop;
  @Output() cropSelected = new EventEmitter<Crop | null>();
  onClick(): void {
    this.selected = !this.selected;
    if (this.selected === true)
      this.cropSelected.emit(this.crop);
    else
      this.cropSelected.emit(null);
  }
}
