import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrl: './crop-card.component.scss'
})
export class CropCardComponent {
  selected: boolean = true;
  crop:string='None';
  @Output() cropSelected=new EventEmitter<string>();
  onClick(): void {
    this.selected = !this.selected;
    this.cropSelected.emit(this.crop);
  }
}
