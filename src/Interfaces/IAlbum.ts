import { Genre } from './IGenre';
import { Singer } from './ISinger';
import { Song } from './ISongs';

export interface Album {
  _id: string;
  name: string;
  singer: Singer;
  releaseDate: Date;
  songs: Song[];
  price: number;
  genre: Genre;
  stock: number;
  image: string;
}
