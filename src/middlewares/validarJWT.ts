export const validarJWT = (token: string) => {
  if (!token) {
    return 'No hay token en la petición';
  }
  return token;
};
