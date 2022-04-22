import { Schema, model } from 'mongoose';
import { ISong } from '../Interfaces/ISongs';

const schema = new Schema<ISong>({
  name: { type: String, required: true },
  singer: { type: Schema.Types.ObjectId, ref: 'singers', required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  album: { type: Schema.Types.ObjectId, ref: 'albums', optional: true },
  duration: { type: Number, required: true },
  completeFile: { type: String, required: true },
  previewFile: { type: String, required: true },
  price: { type: Number, optional: true },
});

export const SongModel = model<ISong>('songs', schema);
