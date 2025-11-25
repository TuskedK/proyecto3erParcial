import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location'; // Ejemplo de API, cámbiala si tienes otra fuente

  constructor(private http: HttpClient) {}

  getLocationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
