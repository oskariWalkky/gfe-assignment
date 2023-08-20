import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormGroupName } from '@angular/forms';
import { Movie, Person } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() onSaveMovie = new EventEmitter<Movie>()

  movieForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  get actors() {
    return this.movieForm.get('actors') as FormArray;
  }

  ngOnInit() {
    this.movieForm = this.fb.group({
      name: [this.movie.name, Validators.required],
      year: [this.movie.year, [Validators.required, Validators.pattern(/^\d+$/)]],
      genres: [this.movie.genres.join(', '), Validators.required],
      ageLimit: [this.movie.ageLimit, [Validators.required, Validators.pattern(/^\d+$/)]],
      rating: [this.movie.rating, [Validators.required, Validators.pattern(/^\d+$/)]],
      actors: this.fb.array([]),
      director: this.fb.group({
        firstName: this.movie.director.firstName,
        lastName: this.movie.director.lastName,
      }),
      synopsis: [this.movie.synopsis, Validators.required],
    });

    this.movie.actors.forEach((actor) => this.actors.push(this.createActor(actor)));
    
    if (this.movie.hasOwnProperty('_id')) {
      this.movieForm.disable();
    }
  }

  createActor(actor?: Person): FormGroup {
    return this.fb.group({
      firstName: [actor?.firstName, Validators.required],
      lastName: [actor?.lastName, Validators.required],
    });
  }

  addActor() {
    this.actors.push(this.createActor());
  }

  removeActor(index: number) {
    this.actors.removeAt(index);
  }

  onEdit() {
    this.movieForm.enable();
  }

  saveChanges() {
    this.movieForm.disable()
    const movie = this.movieForm.value;
    movie.genres = movie.genres.split(',');
    movie._id = this.movie._id
    console.log(movie)
    this.onSaveMovie.emit(movie);
  }

}
