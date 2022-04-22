import { CreateUser, UpdateUser } from '../Interfaces/IUser';
import { UserModel } from '../models/Users.model';

//CRUD
export const createUser = async (data: CreateUser) => {
  const user = await UserModel.create(data);
  return user;
};
export const getListUsers = async () => {
  const AllUsers = await UserModel.find();
  return AllUsers;
};
export const getUserById = async (id: string) => {
  const userById = await UserModel.findById(id);
  return userById;
};
export const getUserByEmail = async (email: string) => {
  const userByEmail = await UserModel.findOne({ email });
  return userByEmail;
};
export const updateUser = async (id: string, data: UpdateUser) => {
  const userUpdated = await UserModel.updateOne({ id }, data);
  return userUpdated;
};
export const deleteUser = async (id: string) => {
  const userDeletedById = await UserModel.deleteOne({ id });
  return userDeletedById;
};
