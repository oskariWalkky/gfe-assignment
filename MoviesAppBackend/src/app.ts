import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import movieRoute from './movie/movie.routes';


const app: Express = express();

app.use(cors());
app.use(express.json())

app.use('/movies', movieRoute)

app.get('/', (req: Request, res: Response) => {
  res.send({message: 'Express + TypeScript Movie App Server'});
});

export default app;