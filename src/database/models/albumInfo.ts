import mongoose from 'mongoose';
import { IAlbumInfo } from '../interfaces';

const { Schema, model } = mongoose;

const albumInfoSchema = new Schema({
  mbid: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
});

const AlbumInfo = model<IAlbumInfo>('AlbumInfo', albumInfoSchema);

export { AlbumInfo };
