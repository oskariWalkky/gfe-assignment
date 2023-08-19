import express, { Request, Response } from 'express';
import movies from '../assets/movies-compact.json'

const router = express.Router();

router.get('/movies', (req: Request, res: Response) => {
    try {
        res.send(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

export default router;