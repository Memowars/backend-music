import bcrypt from 'bcryptjs';
import { UserModel } from '../models/Users.model';
import { LoginUser } from '../Interfaces/IUser';
import { generarJWT } from '../helpers/generarJWT';
const { response } = require('express');

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

    const token = await generarJWT({ _id: _id, email });

    return { ok: validPassword, msg: 'Login exitoso ', _id, email, token };
  } catch (error) {
    console.error(error);
  }
};

export const revalidarToken = async (req, res = response) => {
  const { _id, email } = req;
  const token = await generarJWT({ _id, email });

  res.json({
    ok: true,
    token,
    _id,
    email,
  });
};
