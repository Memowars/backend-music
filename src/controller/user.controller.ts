import { generarJWT } from '../helpers/generarJWT';
import { CreateUser, UpdateUser } from '../Interfaces/IUser';
import { UserModel } from '../models/Users.model';

const bcrypt = require('bcryptjs');
//CRUD
export const createUser = async (data: CreateUser) => {
  const salt = bcrypt.genSaltSync();
  data.password = bcrypt.hashSync(data.password, salt);
  const user = await UserModel.create(data);
  const token = await generarJWT({ _id: user._id, email: user.email });
  return { user, token };
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
