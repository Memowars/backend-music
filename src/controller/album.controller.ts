import { CreateAlbum, UpdateAlbum } from '../Interfaces/IAlbum';
import { AlbumModel } from '../models/Album.model';

//CRUD
export const createAlbum = async (data: CreateAlbum) => {
  const album = await AlbumModel.create(data);
  return album;
};
export const getListAlbums = async () => {
  const getAllalbums = await AlbumModel.find();
  return getAllalbums;
};
export const getAlbumById = async (id: string) => {
  const albumById = await AlbumModel.findById({ id });
  return albumById;
};
export const updateAlbum = async (id: string, data: UpdateAlbum) => {
  const albumUpdated = await AlbumModel.updateOne({ id }, data);
  return albumUpdated;
};
export const deleteAlbum = async (id: string) => {
  const deletedAlbum = await AlbumModel.deleteOne({ id });
  return deletedAlbum;
};
