import { Schema, model } from 'mongoose';
import { User } from '../Interfaces/IUser';

const schema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true, default: 'customer' },
});

export const UserModel = model<User>('users', schema);
