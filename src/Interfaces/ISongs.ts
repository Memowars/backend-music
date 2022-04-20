import { Album } from './IAlbum';
import { Singer } from './ISinger';

export interface Song {
  _id: string;
  name: string;
  singer: Singer;
  releaseDate: Date;
  album?: Album;
  duration?: number;
  completeFile: string;
  previewFile: string;
  price?: number;
}
