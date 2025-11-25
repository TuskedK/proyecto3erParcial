import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LocationService } from '../services/location-service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-locacion',
  templateUrl: './locacion.page.html',
  styleUrls: ['./locacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LocacionPage implements OnInit {
  location: any;
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    const locationId = this.route.snapshot.paramMap.get('id'); // Obtener el id desde la URL
    if (locationId) {
      this.locationService.getLocationById(locationId).subscribe((data) => {
        this.location = data; // Asignar los datos de la locación
        console.log(this.location);
      });
    }
  }

}
