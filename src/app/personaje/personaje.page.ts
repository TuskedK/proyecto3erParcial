import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CharacterService } from '../services/character-service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent]
})
export class PersonajePage implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit() : void {
    const characterId = this.route.snapshot.paramMap.get('id'); // Obtener el id desde la URL
    if (characterId) {
      this.characterService.getCharacterById(characterId).subscribe((data) => {
        this.character = data; // Asignar los datos del personaje
        console.log(this.character);
      });
    }
  }

}
