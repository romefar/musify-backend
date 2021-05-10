
import { FilterQuery } from 'mongoose';
import { IComment, ICommentPopulated } from 'src/database';
import { CommentRepository, commentRepository } from '../repositories';

interface ICommentService {
  getAll: (filter: FilterQuery<IComment>) => Promise<IComment[]>;
  getAllPopulated: (filter: FilterQuery<IComment>) => Promise<ICommentPopulated[]>;
  getOneByIdPopulated: (id: string) => Promise<ICommentPopulated>;
  getOneById: (id: string) => Promise<IComment | null>;
  create: (data: IComment) => Promise<IComment>;
  delete: (id: string) => Promise<boolean>;
  update: (data: IComment) => Promise<IComment>;
}

class CommentService implements ICommentService {
  private readonly repository: CommentRepository;

  constructor () {
    this.repository = commentRepository;
  }

  async getAll (filter: FilterQuery<IComment>) {
    return await this.repository.find(filter);
  }

  async getAllPopulated (filter: FilterQuery<IComment>) {
    return await this.repository.findAllPopulated(filter);
  }

  async getOneById (id: string) {
    const comment = await this.repository.findById(id);

    if (!comment) {
      throw new Error('Comment does not exist.');
    }

    return comment;
  }

  async getOneByIdPopulated (id: string) {
    const populatedComment = await this.repository.findById(id);

    if (!populatedComment) {
      throw new Error('Comment does not exist.');
    }

    return populatedComment;
  }

  async create (data: IComment) {
    const comment = await this.repository.create(data);

    return comment;
  }

  async delete (id: string) {
    const isCommentExists = await this.repository.findById(id);

    if (isCommentExists) {
      throw new Error('Cannot find the comment.');
    }

    const deletedComment = await this.repository.deleteOne({ _id: id });

    // Add Cloudinary service layer [DELETE]

    return !!deletedComment.ok;
  }

  async update (data: IComment) {
    const { id } = data;

    const isCommentExists = await this.repository.findById(id);

    if (!isCommentExists) {
      throw new Error('Comment does not exist.');
    }

    const updatedComment = await this.repository.findByIdAndUpdate(id, data);

    if (!updatedComment) {
      throw new Error('Cannot update the comment.');
    }

    // Add Cloudinary service layer [PUT]

    return updatedComment;
  }
}

export default new CommentService();
