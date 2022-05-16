import { Application, Router, Request, Response } from 'express';
import {
  createAlbum,
  getListAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
} from '../controller/album.controller';

export const AlbumRoute = (app: Application) => {
  const router = Router();
  app.use('/albums', router);

  router.post('/createAlbum', async (req: Request, res: Response) => {
    const album = await createAlbum(req.body);
    res.status(201).json(album);
  });

  router.get('/getAlbums/', async (req: Request, res: Response) => {
    const getAllAlbums = await getListAlbums();
    res.status(200).json(getAllAlbums);
  });

  router.get('/getAlbumById/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const AlbumById = getAlbumById(id);
    res.status(200).json(AlbumById);
  });

  router.patch('/updateAlbum/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedAlbum = updateAlbum(id, req.body);
    res.status(200).json(updatedAlbum);

    router.delete('/deleteAlbum/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const deletedAlbum = deleteAlbum(id);
      res.status(200).json(deletedAlbum);
    });
  });
};
