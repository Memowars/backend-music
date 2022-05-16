import { Schema, model } from 'mongoose';
import { ISinger } from '../Interfaces/ISinger';

const schema = new Schema<ISinger>({
  stageName: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationality: { type: String, required: true },
  image: { type: String, required: true },
});

export const SingerModel = model<ISinger>('singers', schema);
