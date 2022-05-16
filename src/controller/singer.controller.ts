import { CreateSinger, UpdateSinger } from '../Interfaces/ISinger';
import { SingerModel } from '../models/Singer.model';

//CRUD
export const createSinger = async (data: CreateSinger) => {
  const singer = await SingerModel.create(data);
  return singer;
};
export const getListSingers = async () => {
  const getAllSingers = await SingerModel.find();
  return getAllSingers;
};
export const getSingerById = async (id: string) => {
  const singerById = await SingerModel.findById(id);
  return singerById;
};
export const updateSinger = async (id: string, data: UpdateSinger) => {
  const updatedSinger = await SingerModel.updateOne({ id }, data);
  return updatedSinger;
};
export const deleteSinger = async (id: string) => {
  const deletedSinger = await SingerModel.deleteOne({ id });
  return deletedSinger;
};
