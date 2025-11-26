import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSpinner} from '@ionic/angular/standalone';
import { NavbarComponent } from '../navbar/navbar.component';
import { EpisodesService } from '../services/episodes-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonSpinner, RouterModule]
})
export class EpisodiosPage implements OnInit {
  episodes: any[] = [];
  loading: boolean = false;

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit() {
    this.cargarEpisodes();
  }

  cargarEpisodes() {
    this.loading = true;
    this.episodesService.getAllEpisodes().subscribe((data) => {
      this.episodes = data.results;
      this.loading = false;
    });
  }

}
