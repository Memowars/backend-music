import { IGenre } from './IGenre';
import { ISinger } from './ISinger';
import { ISong } from './ISongs';

export interface IAlbum {
  _id: string;
  name: string;
  singerID: ISinger;
  releaseDate: Date;
  songsID: ISong[];
  price: number;
  genreID: IGenre;
  stock: number;
  image: string;
}

export type CreateAlbum = Omit<IAlbum, '_id'>;
export type UpdateAlbum = Partial<CreateAlbum>;
