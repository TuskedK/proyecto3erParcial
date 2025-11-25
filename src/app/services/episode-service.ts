import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode'; // Ejemplo de API, cámbiala si tienes otra fuente

  constructor(private http: HttpClient) {}

  getEpisodeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
