import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import { SearchDrawerComponent } from './components/search-drawer/search-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { CropCardComponent } from './components/crop-card/crop-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
    SearchDrawerComponent,
    SearchBarComponent,
    CropCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
