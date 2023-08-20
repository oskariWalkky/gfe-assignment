import { ObjectId } from "mongodb";

export interface IMovie {
    name: string;
    year: number;
    genres: string[];
    ageLimit: number;
    rating: number;
    actors: Person[];
    director: Person;
    synopsis: string;
    id?: ObjectId;
}

export interface Person {
    firstName: string;
    lastName: string;
}