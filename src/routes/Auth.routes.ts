import { Application, Router, Request, Response } from 'express';
import { loginUser, revalidarToken } from '../controller/auth.controller';
import { ValidarJWT } from '../middlewares/validarJWT';

export const AuthRoute = (app: Application) => {
  const router = Router();
  app.use('/auth', router);

  router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const login = await loginUser({ email, password });

    if (!login.ok) {
      return res.status(400).json(login);
    }
    if (login.ok) {
      return res.status(200).json(login);
    }
  });

  router.get('/renew', ValidarJWT, revalidarToken);
};
