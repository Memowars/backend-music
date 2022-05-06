import { model, Schema } from 'mongoose';
import { IAlbum } from '../Interfaces/IAlbum';

const schema = new Schema<IAlbum>({
  name: { type: String, required: true },
  singerID: { type: Schema.Types.ObjectId, ref: 'singers', required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  songsID: { type: Schema.Types.ObjectId, ref: 'songs' },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 100 },
  genreID: { type: Schema.Types.ObjectId, ref: 'genres', required: true },
  image: { type: String, required: true },
});

export const AlbumModel = model<IAlbum>('albums', schema);
