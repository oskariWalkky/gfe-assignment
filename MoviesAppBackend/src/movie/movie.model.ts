import { ObjectId } from "mongodb";
import { Person } from "./movie.types";

export default class Movie {
    constructor(
        public name: string,
        public year: number,
        public genres: string[],
        public ageLimit: number,
        public rating: number,
        public actors: Person[],
        public director: Person,
        public synopsis: string,
        public id?: ObjectId
    ) { }
}