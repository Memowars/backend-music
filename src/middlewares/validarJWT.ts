import jwt from 'jsonwebtoken';
import { TokenUser } from '../Interfaces/IUser';
const { response, request } = require('express');
export const ValidarJWT = (req = request, res = response, next: Function) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición',
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req._id = (<TokenUser>payload)._id;
    req.email = (<TokenUser>payload).email;
    console.log('PAYLOAD DE VALIDAR', payload);
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
    });
  }

  next();
};
