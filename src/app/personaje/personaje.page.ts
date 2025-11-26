import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonButton} from '@ionic/angular/standalone';
import { CharacterService } from '../services/character-service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, IonSpinner, RouterModule, IonButton]
})
export class PersonajePage implements OnInit {
  character : any = null;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit()  {
    this.cargarPersonaje();
  }

  cargarPersonaje() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(id).subscribe((data) => {
        this.character = data;
        console.log(this.character);
        
      });
    }
  }

  regresar() {
    window.history.back();
  }
}
