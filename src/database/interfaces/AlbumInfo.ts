import { Document } from 'mongoose';
import { IUser } from './User';

export interface IAlbumInfo extends Document {
  mbid?: string;
  rating: number;
  comments: [IUser['_id']];
}

export interface IAlbumInfoPopulated extends Document {
  mbid?: string;
  rating: number;
  comments: [IUser];
}
