import { IAlbum } from './IAlbum';

export interface ISinger {
  _id: string;
  stageName: string;
  name: string;
  lastName: string;
  nationality: string;
  albums?: IAlbum[];
  image: string;
}

export type CreateSinger = Omit<ISinger, '_id'>;
export type UpdateSinger = Partial<ISinger>;
