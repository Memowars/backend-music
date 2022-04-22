import { Application, Router, Request, Response } from 'express';
import {
  createSong,
  getListSongs,
  getSongById,
  updateSong,
  deleteSong,
} from '../controller/song.controller';

export const AlbumRoute = (app: Application) => {
  const router = Router();
  app.use('/songs', router);

  router.post('/createSong', async (req: Request, res: Response) => {
    const song = createSong(req.body);
    res.status(201).json(song);
  });

  router.get('/getSongs', async (req: Request, res: Response) => {
    const allSongs = getListSongs(req.body);
    res.status(200).json(allSongs);
  });

  router.get('/getSongById:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const songById = getSongById(id);
    res.status(200).json(songById);
  });

  router.patch('/updateSong:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedSong = updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });

  router.delete('/deleteSong:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedSong = deleteSong(id);
    res.status(200).json(deletedSong);
  });
};
