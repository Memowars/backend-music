export interface IUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
  type: ERoles;
}

export type CreateUser = Omit<IUser, '_id'>;
export type UpdateUser = Partial<CreateUser>;

export interface LoginDTO {
  userName?: string;
  email?: string;
  password: string;
}

export interface LoginEmailDTO {
  email: string;
  password: string;
}

export interface LoginUsernameDTO {
  userName: string;
  password: string;
}

export enum ERoles {
  ADMIN = 'Admin',
  CUSTUMER = 'Customer',
}
