import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=81decd9fb96b8335d53f068c335f94f0');
  }
}
