import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, iif, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/Providers/movies.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies$ = new BehaviorSubject<Movie[]>([]);
  titleSearch$ = new BehaviorSubject<string | null>(null);

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.titleSearch$
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        switchMap((title) => iif(
          () => !!title,
          this.moviesService.searchForMovieTitle(title as string),
          this.moviesService.getMovies()
        ))
      )
      .subscribe((movies) => this.movies$.next(movies));
  }

  addNewMovie(): void {
    const newMovie = {
      name: '',
      year: null,
      genres: [],
      ageLimit: null,
      rating: null,
      actors: [],
      director: { firstName: '', lastName: '' },
      synopsis: ''
    };

    this.movies$.next([
      newMovie,
      ...this.movies$.value
    ]);
  }

  saveMovie(movie: Movie): void {
    this.moviesService.saveMovie(movie).subscribe();
  }
}
