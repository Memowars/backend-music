import { Application, Router, Request, Response } from 'express';
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

  router.post('/createUser', async (req: Request, res: Response) => {
    const user = await createUser(req.body);
    res.status(201).json(user);
  });

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
    const UserByEmail = await getUserByEmail(email);
    res.status(200).json(UserByEmail);
  });

  router.patch('/updateUser/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const userUpdated = await updateUser(id, req.body);
    res.status(200).json(userUpdated);
  });

  router.delete('/deleteUser/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  });
};
