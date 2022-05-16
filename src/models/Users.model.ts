import { Schema, model } from 'mongoose';
import { ERoles, IUser } from '../Interfaces/IUser';

const schema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {
    type: String,
    required: true,
    default: ERoles.CUSTUMER,
    enum: ERoles,
  },
});

export const UserModel = model<IUser>('users', schema);
