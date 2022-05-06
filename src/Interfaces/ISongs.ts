import { IAlbum } from './IAlbum';
import { ISinger } from './ISinger';

export interface ISong {
  _id: string;
  name: string;
  singerID?: ISinger;
  releaseDate: Date;
  albumID?: IAlbum;
  duration?: number;
  completeFile: string;
  previewFile: string;
  price?: number;
}

export type CreateSong = Omit<ISong, '_id'>;
export type UpdateSong = Partial<CreateSong>;
