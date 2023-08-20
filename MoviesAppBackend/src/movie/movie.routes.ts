import express, { Request, Response } from 'express';
import { collections } from '../services/database.service';
import Movie from './movie.model';
import { ObjectId } from 'mongodb';
import { logError } from '../services/logging.service';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const movies = await collections.movies!.find({}).toArray();
        res.send(movies);
    } catch (error) {
        logError(error);
        res.status(500).send((error as any)?.message ?? error);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const movie = await collections.movies!.findOne(query);
        if (movie) {
            res.status(200).send(movie);
        }
    } catch (error) {
        logError(error);
        res.status(404).send(`Unable to find matching document with id: ${id}`);
    }
});

router.get('/title/:title', async (req: Request, res: Response) => {
    const searchTerm = req.params?.title;
    try {
        const query = { name: { $regex: new RegExp(searchTerm, 'i') } };
        const movies = await collections.movies!.find(query).toArray();
        if (movies) {
            res.status(200).send(movies);
        }
    } catch (error) {
        logError(error);
        res.status(404).send(`Unable to find matching document with id: ${searchTerm}`);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newMovie = req.body as Movie;
        const result = await collections.movies!.insertOne(newMovie);

        result
            ? res.status(201).send(`Successfully created a new movie with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new movie.");
    } catch (error) {
        logError(error, 'Post-New-Movie');
        res.status(400).send((error as any)?.message ?? error);
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedMovie = req.body as Movie;
        delete updatedMovie._id
        const query = { _id: new ObjectId(id) };

        const result = await collections.movies!.updateOne(query, { $set: updatedMovie });

        result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    } catch (error) {
        logError(error);
        res.status(400).send((error as any)?.message ?? error);
    }
});

export default router;