import express from 'express';
import morgan from 'morgan';
import { UserRoutes } from './routes/Users.routes';
import { SongRoutes } from './routes/Songs.routes';
import { GenreRoutes } from './routes/Genres.routes';
import { AlbumRoute } from './routes/Albums.routes';
import { SingerRoute } from './routes/Singers.routes';
import { AuthRoute } from './routes/Auth.routes';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);

UserRoutes(app);
GenreRoutes(app);
SongRoutes(app);
AlbumRoute(app);
SingerRoute(app);
AuthRoute(app);

export default app;
