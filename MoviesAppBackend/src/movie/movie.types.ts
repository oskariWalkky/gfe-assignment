export interface MovieWithoutId {
    name: string;
    year: number;
    genres: string[];
    ageLimit: number;
    rating: number;
    actors: Actor[];
    director: Director;
    synopsis: string;
}

export interface MovieWithId extends MovieWithoutId {
    id: string;
}

export interface Actor {
    firstName: string;
    lastName: string;
}

export interface Director {
    firstName: string;
    lastName: string;
}

