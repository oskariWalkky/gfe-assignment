import express, { Express, Request, Response } from 'express';
import movieRoute from './movie/movie.routes';


const app: Express = express();

app.use('/', movieRoute)

app.get('/', (req: Request, res: Response) => {
  res.send({message: 'Express + TypeScript Movie App Server'});
});

export default app;