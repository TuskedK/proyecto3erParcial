import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { LocationService } from '../services/location-service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-locacion',
  templateUrl: './locacion.page.html',
  styleUrls: ['./locacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, IonButton]
})
export class LocacionPage implements OnInit {
  location: any;
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.cargarLocacion();
  }

  cargarLocacion() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.locationService.getLocationById(id).subscribe((data) => {
        this.location = data;
        console.log(this.location);
      });
    }
  }

  regresar() {
    window.history.back();
  }

}
