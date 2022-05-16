import { Application, Router, Request, Response } from 'express';
import {
  createSong,
  getListSongs,
  getSongById,
  updateSong,
  deleteSong,
} from '../controller/song.controller';
import { SongModel } from '../models/Song.model';

export const SongRoutes = (app: Application) => {
  const router = Router();
  app.use('/songs', router);

  router.post('/createSong', async (req: Request, res: Response) => {
    const song = await createSong(req.body);

    res.status(201).json(song);
  });

  router.get('/getSongs', async (req: Request, res: Response) => {
    const getAllSongs = await getListSongs();
    res.status(200).json(getAllSongs);
  });

  router.get('/getSongById/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const songById = await getSongById(id);
    res.status(200).json(songById);
  });

  router.patch('/updateSong:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });

  router.delete('/deleteSong:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  });
};
