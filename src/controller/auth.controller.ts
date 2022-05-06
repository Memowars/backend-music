import bcrypt from 'bcryptjs';
import { UserModel } from '../models/Users.model';
import { LoginUser } from '../Interfaces/IUser';
import { generarJWT } from '../helpers/jsw';

export const loginUser = async (data: LoginUser) => {
  const { email, password } = data;
  const user = await UserModel.findOne({ email });

  try {
    if (user === null) {
      return { ok: false, msg: 'El usuario no esta registrado' };
    }
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return { ok: false, msg: 'Datos incorrectos' };
    }
    const _id = user._id === null ? '' : user._id;

    const token = await generarJWT(_id, email);

    return { ok: validPassword, msg: 'Login exitoso ', _id, email, token };
  } catch (error) {
    console.error(error);
  }
};
