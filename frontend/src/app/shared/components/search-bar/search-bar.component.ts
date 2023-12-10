// search-bar.component.ts

import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';
  placeholder: string = 'Search crops';
  @Input() label!: string;
  onSearchInput() {
    this.search.emit(this.searchQuery);
  }

  handleInputChange() {
    this.search.emit(this.searchQuery);
  }
  clearSearch() {
    this.searchQuery = '';
    this.search.emit('');
  }

  handleFocus() {
    this.placeholder = '';
  }

  handleBlur() {
    if (!this.searchQuery) {
      this.placeholder = 'Search crops';
    }
  }
}
