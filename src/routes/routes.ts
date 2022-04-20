import { Application, Router, Request, Response } from 'express';

export const rutaEjemplo = (app: Application) => {
  const router = Router();
  app.use('/routeEjemplo', router);
  router.get('/love', (req: Request, res: Response) => {
    res.send('Prueba de ruta ejemplo');
  });
};
