import { model, Schema } from 'mongoose';
import { Album } from '../Interfaces/IAlbum';

const schema = new Schema<Album>({
  name: { type: String, required: true },
  singer: { type: Schema.Types.ObjectId, ref: 'singers', required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  songs: [{ type: Schema.Types.ObjectId, ref: 'songs' }],
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 100 },
  genre: { type: Schema.Types.ObjectId, ref: 'genres', required: true },
  image: { type: String, required: true },
});

export const AlbumModel = model<Album>('albums', schema);
