export interface Movie {
    name: string;
    year: number | null;
    genres: string[];
    ageLimit: number | null;
    rating: number | null;
    actors: Person[];
    director: Person;
    synopsis: string;
    _id?: string;
}

export interface Person {
    firstName: string;
    lastName: string;
}