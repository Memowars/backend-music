import { Album } from './IAlbum';
import { Song } from './ISongs';

export interface Singer {
  _id: string;
  name: string;
  lastName: string;
  nationality: string;
  albums?: Album[];
  songs?: Song[];
}
