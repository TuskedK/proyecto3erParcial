import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { EpisodeService } from '../services/episode-service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.page.html',
  styleUrls: ['./episodio.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonButton]
})
export class EpisodioPage implements OnInit {
  episode: any = null;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) { }

  ngOnInit() : void {
    this.cargarEpisodio();
  }

  cargarEpisodio() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.episodeService.getEpisodeById(id).subscribe((data) => {
        this.episode = data;
        console.log(this.episode);
      });
    }
  }

  regresar() {
    window.history.back();  
  }

}
