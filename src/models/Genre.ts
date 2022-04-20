import { Schema, model } from 'mongoose';
import { Genre } from '../Interfaces/IGenre';

const schema = new Schema<Genre>({
  description: { type: String, required: true },
});
export const GenreModel = model<Genre>('genres', schema);
