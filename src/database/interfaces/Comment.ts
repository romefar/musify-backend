import { Document } from 'mongoose';
import { IUser } from './User';

export interface IComment extends Document {
  description: string;
  rating: number;
  leftBy: IUser['_id'];
  dislikedBy: [IUser['_id']];
  likedBy: [IUser['_id']];
}

export interface ICommentPopulated extends Document {
  description: string;
  rating: number;
  leftBy: IUser;
  dislikedBy: IUser[];
  likedBy: IUser[];
}
