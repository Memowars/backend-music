import { Application, Router, Request, Response } from 'express';
import {
  createGenre,
  getListGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
} from '../controller/genre.controller';

export const SingerRoute = (app: Application) => {
  const router = Router();
  app.use('/genres', router);

  router.post('/createGenre', async (req: Request, res: Response) => {
    const genre = await createGenre(req.body);
    res.status(201).json(genre);
  });

  router.get('/getGenres/', async (req: Request, res: Response) => {
    const getAllGenres = await getListGenres();
    res.status(200).json(getAllGenres);
  });

  router.get('/getGenreById/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const genreById = getGenreById(id);
    res.status(200).json(genreById);
  });

  router.patch('/updateGenre/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedGenre = updateGenre(id, req.body);
    res.status(200).json(updatedGenre);

    router.delete('/deleteGenre/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const deletedGenre = deleteGenre(id);
      res.status(200).json(deletedGenre);
    });
  });
};
