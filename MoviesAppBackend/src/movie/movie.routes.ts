import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';


const router = express.Router();

router.get('/movies', (req: Request, res: Response) => {
    try {
        const filePath = path.join(__dirname, '..', 'assets', 'movies-compact.json');
        const movies = fs.readFileSync(filePath, 'utf-8');
        res.send(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});


export default router;

