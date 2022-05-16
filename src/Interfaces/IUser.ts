export interface IUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
  type: ERoles;
}

export type CreateUser = Omit<IUser, '_id'>;
export type UpdateUser = Partial<CreateUser>;
export type LoginUser = Omit<IUser, '_id' | 'userName' | 'type'>;
export type TokenUser = Omit<IUser, 'password' | 'userName' | 'type'>;

export enum ERoles {
  ADMIN = 'Admin',
  CUSTUMER = 'Customer',
}
