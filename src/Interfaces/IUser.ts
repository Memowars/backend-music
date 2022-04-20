export interface User {
  _id: string;
  userName: string;
  email: string;
  password: string;
  type: 'admin' | 'customer';
}

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
