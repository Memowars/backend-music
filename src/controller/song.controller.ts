import { CreateSong, UpdateSong } from '../Interfaces/ISongs';
import { SongModel } from '../models/Song.model';
//CRUD

export const createSong = async (data: CreateSong) => {
  const song = await SongModel.create(data);
  return song;
};
export const getListSongs = async () => {
  const getAllSong = await SongModel.find();
  return getAllSong;
};
export const getSongById = async (id: string) => {
  const getSongById = await SongModel.findById(id);
  return getSongById;
};
export const updateSong = async (id: string, data: UpdateSong) => {
  const updatedSong = await SongModel.updateOne({ id }, data);
  return updatedSong;
};
export const deleteSong = async (id: string) => {
  const deletedSong = await SongModel.deleteOne({ id });
  return deletedSong;
};
