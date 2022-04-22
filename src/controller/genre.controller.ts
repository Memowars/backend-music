import { CreateGenre, UpdateGenre } from '../Interfaces/IGenre';
import { GenreModel } from '../models/Genre.model';

//CRUD
export const createGenre = async (data: CreateGenre) => {
  const genre = await GenreModel.create(data);
  return genre;
};
export const getListGenres = async () => {
  const getAllGenre = await GenreModel.find();
  return getAllGenre;
};
export const getGenreById = async (id: string) => {
  const genreById = await GenreModel.findById({ id });
  return genreById;
};
export const updateGenre = async (id: string, data: UpdateGenre) => {
  const updatedGenre = await GenreModel.updateOne({ id }, data);
  return updatedGenre;
};
export const deleteGenre = async (id: string) => {
  const updatedGenre = await GenreModel.deleteOne({ id });
  return updatedGenre;
};
