import { BaseRepository } from './base.repository';
import { Comment, IComment, ICommentPopulated } from '../../database';
import { FilterQuery, QueryOptions, Document } from 'mongoose';

interface ICommentRepository {
  findAllPopulated: (
    filter: FilterQuery<ICommentPopulated>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) => Promise<Array<ICommentPopulated>>;
  findByIdPopulated: (id: string) => Promise<Document<ICommentPopulated> | null>;
}

export class CommentRepository extends BaseRepository<IComment> implements ICommentRepository {
  constructor () {
    super(Comment);
  }

  public async findAllPopulated (
    filter: FilterQuery<IComment>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) {
    return await this.model
      .find(filter, projection, options)
      .populate('leftBy')
      .populate('dislikedBy')
      .populate('likedBy') as ICommentPopulated[];
  }

  public async findByIdPopulated (id: string) {
    return await this.model
      .findById(id)
      .populate('leftBy')
      .populate('dislikedBy')
      .populate('likedBy') as ICommentPopulated;
  }
}

export default new CommentRepository();
