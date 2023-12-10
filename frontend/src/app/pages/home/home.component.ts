import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  onSearch(query: string) {
    // Handle the search logic here
    console.log('Search query:', query);
  }

  cropSelected(event: Event): void {
    console.log(event);
  }
}
