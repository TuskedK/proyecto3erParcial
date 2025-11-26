import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSpinner } from '@ionic/angular/standalone';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocationsService } from '../services/locations-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-locaciones',
  templateUrl: './locaciones.page.html',
  styleUrls: ['./locaciones.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule , NavbarComponent, IonSpinner, RouterModule]
})
export class LocacionesPage implements OnInit {
  locations: any[] = [];
  loading: boolean = false;

  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.cargarLocations();
  }

  cargarLocations() {
    this.loading = true;
    this.locationsService.getAllLocations().subscribe((data) => {
      this.locations = data.results;
      this.loading = false;
    });
  }

}
