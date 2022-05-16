import jwt from 'jsonwebtoken';
import { TokenUser } from '../Interfaces/IUser';

export const generarJWT = (data: TokenUser) => {
  return new Promise((resolve, reject) => {
    const { _id, email } = data;
    const payload = { _id, email };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }

        resolve(token);
      }
    );
  });
};
