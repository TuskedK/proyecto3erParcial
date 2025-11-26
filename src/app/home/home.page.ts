import { Component } from '@angular/core';
import {IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton, RouterLink],
})
export class HomePage {
  constructor(
    private route: Router
  ) {}
}
