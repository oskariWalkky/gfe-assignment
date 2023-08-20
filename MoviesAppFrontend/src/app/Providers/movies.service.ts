import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../types/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly URL = 'http://localhost:8000/movies'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL);
  }

  searchForMovieTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL + '/title/' + title);
  }

  saveMovie(movie: Movie): Observable<unknown> {
    return movie._id
      ? this.http.put(this.URL + '/' + movie._id, movie, { responseType: 'text' })
      : this.http.post(this.URL, movie, { responseType: 'text' });
  }
}
