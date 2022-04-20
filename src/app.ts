import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { rutaEjemplo } from './routes/routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Back is runnning now!');
});

app.post('/alex', (req: Request, res: Response) => {
  const obj = {};
  res.status(200).json(req.body);
  console.log(req.body);
});

rutaEjemplo(app);

export default app;
