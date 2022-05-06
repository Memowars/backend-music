import { Application, Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import {
  createUser,
  deleteUser,
  getListUsers,
  getUserByEmail,
  getUserById,
  updateUser,
} from '../controller/user.controller';

export const UserRoutes = (app: Application) => {
  const router = Router();
  app.use('/users', router);

  router.post(
    '/createUser',
    [
      body('userName', 'El usuario es requerido').not().isEmpty(),
      body('email', 'El email valido es requerido').isEmail().normalizeEmail(),
      body(
        'password',
        'Elije una contraseña valida con más de 5 caracteres'
      ).isLength({
        min: 5,
      }),
    ],
    async (req: Request, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { email } = req.body;
      const existingEmail = await getUserByEmail(email);
      try {
        if (existingEmail) {
          return res
            .status(400)
            .json({ success: false, message: 'El email ya esta registrado' });
        }

        const user = await createUser(req.body);
        res.status(200).json({
          success: true,
          message: 'Cuenta creada exitosamente',
          user,
        });
      } catch (error) {
        console.error(error);
      }
    }
  );

  router.get('/getUsers/', async (req: Request, res: Response) => {
    const getAllUsers = await getListUsers();
    res.status(200).json(getAllUsers);
  });

  router.get('/getUsersById/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const getUsersById = await getUserById(id);
    res.status(200).json(getUsersById);
  });

  router.get('/getUsersByEmail', async (req: Request, res: Response) => {
    const { email } = req.body;
    const getUsersByEmail = await getUserByEmail(email);
    res.status(200).json(getUsersByEmail);
  });

  router.patch('/updateUser/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const userUpdated = await updateUser(id, req.body);
    res.status(200).json(userUpdated);
  });

  router.delete('/deleteUser/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(200).json(user);
  });
};
