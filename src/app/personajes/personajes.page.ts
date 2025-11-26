import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from '../navbar/navbar.component';
import { CharactersService } from '../services/characters-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, IonSpinner, IonButton, RouterModule]
})
export class PersonajesPage implements OnInit {
  characters: any[] = [];
  loading: boolean = false;

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.cargarCharacters();
  }

  cargarCharacters() {
    this.loading = true;
    this.charactersService.getAllCharacters().subscribe((data) => {
      this.characters = data.results;      
      this.loading = false;
    });
  }
}
