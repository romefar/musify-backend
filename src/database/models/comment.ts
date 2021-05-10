import mongoose from 'mongoose';
import { IComment } from '../interfaces';

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  description: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    default: 0
  },
  dislikedBy: [{
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }],
  likedBy: [{
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }],
  leftBy: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Comment = model<IComment>('Comment', commentSchema);

export { Comment };
