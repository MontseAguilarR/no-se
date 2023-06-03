import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancion } from '../Models/canciones';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url='http://localhost:4000/api/canciones/';
  
  constructor(private http: HttpClient) { }

  getCanciones(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarCanciones(id: string): Observable<any>{
    return this.http.delete(this.url + id);

  }

  guardarCanciones(cancion: Cancion): Observable<any>{
    return this.http.post(this.url, cancion);
  }

  obtenerCancion(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCancion(id: string, cancion: Cancion): Observable<any>{
    return this.http.put(this.url + id, cancion);
  }
}
