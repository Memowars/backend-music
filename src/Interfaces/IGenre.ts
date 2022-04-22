export interface IGenre {
  _id: string;
  description: string;
}

export type CreateGenre = Omit<IGenre, '_id'>;
export type UpdateGenre = Partial<CreateGenre>;
