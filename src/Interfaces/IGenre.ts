export interface Genre {
  _id: string;
  description: string;
}

export interface getGenreByIdDTO {
  _id: string;
}
export interface CreateGenreDTO {
  description: string;
}
export interface UpdateGenreDTO {
  _id: string;
  description: string;
}
export interface deleteGenreDTO {
  _id: string;
}
