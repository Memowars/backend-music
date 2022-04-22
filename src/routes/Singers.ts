import { Application, Router, Request, Response } from 'express';
import {
  createSinger,
  getListSingers,
  getSingerById,
  updateSinger,
  deleteSinger,
} from '../controller/singer.controller';

export const SingerRoute = (app: Application) => {
  const router = Router();
  app.use('/singer', router);

  router.post('/createSinger', async (req: Request, res: Response) => {
    const singer = await createSinger(req.body);
    res.status(201).json(singer);
  });

  router.get('/getSingers/', async (req: Request, res: Response) => {
    const getAllSinger = await getListSingers();
    res.status(200).json(getAllSinger);
  });

  router.get('/getSingerById/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const singerById = getSingerById(id);
    res.status(200).json(singerById);
  });

  router.patch('/updateSinger/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedSinger = updateSinger(id, req.body);
    res.status(200).json(updatedSinger);

    router.delete('/deleteSinger/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const deletedSinger = deleteSinger(id);
      res.status(200).json(deletedSinger);
    });
  });
};
