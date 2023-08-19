import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import movieRoute from './movie/movie.routes';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use('/', movieRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Movie App Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});