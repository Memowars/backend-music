import { Schema, model } from 'mongoose';
import { IGenre } from '../Interfaces/IGenre';

const schema = new Schema<IGenre>({
  description: { type: String, required: true },
});
export const GenreModel = model<IGenre>('genres', schema);
