import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonButton} from '@ionic/angular/standalone';
import { NavbarComponent } from '../navbar/navbar.component';
import { CharactersService } from '../services/characters-service';
import { EpisodesService } from '../services/episodes-service';
import { LocationsService } from '../services/locations-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonSpinner, RouterLink, IonButton]
})
export class PrincipalPage implements OnInit {
  characters: any[] = [];
  episodes: any[] = [];
  locations: any[] = [];
  loading: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private episodesService: EpisodesService,
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.cargarCharacters();
    this.cargarEpisodes();
    this.cargarLocations();
  }

  cargarCharacters() {
    this.loading = true;
    this.charactersService.getAllCharacters().subscribe((data) => {
      this.characters = data.results;      
      this.loading = false;
    });
  }

  cargarEpisodes() {
    this.loading = true;
    this.episodesService.getAllEpisodes().subscribe((data) => {
      this.episodes = data.results;
      console.log(this.episodes);
      
      this.loading = false;
    });
  }

  cargarLocations() {
    this.loading = true;
    this.locationsService.getAllLocations().subscribe((data) => {
      this.locations = data.results;
      console.log(this.locations);
      
      this.loading = false;
    });
  }

}
