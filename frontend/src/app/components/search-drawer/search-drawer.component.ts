import { Component } from '@angular/core';

@Component({
  selector: 'app-search-drawer',
  templateUrl: './search-drawer.component.html',
  styleUrl: './search-drawer.component.scss'
})
export class SearchDrawerComponent {
  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }
}
