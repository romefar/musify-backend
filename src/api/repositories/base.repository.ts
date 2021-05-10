import {
  Document, Model, FilterQuery, UpdateQuery,
  ModelUpdateOptions, QueryOptions, UpdateWriteOpResult
} from 'mongoose';

export interface IBaseRepository<T extends Document> {
  findById: (id: string) => Promise<Document<T> | null>;
  findOne: (
    filter?: FilterQuery<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) => Promise<Document<T> | null>
  find: (
    filter: FilterQuery<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) => Promise<Array<T>>;
  findByIdAndUpdate: (
    id: string,
    update: UpdateQuery<T>,
    options?: QueryOptions | null
  ) => Promise<T | null>,
  create: (data: T) => Promise<Document<T> | null>;
  updateOne: (
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: ModelUpdateOptions
  ) => Promise<UpdateWriteOpResult>;
  deleteOne: (
    filter: FilterQuery<T>,
  ) => Promise<{ ok?: number | undefined; n?: number | undefined; } & { deletedCount?: number | undefined; }>;
}

export class BaseRepository<T extends Document> implements IBaseRepository<T> {
  protected readonly model: Model<T>;

  constructor (model: Model<T>) {
    this.model = model;
  }

  async findByIdAndUpdate (
    id: string,
    update: UpdateQuery<T>,
    options?: QueryOptions | null
  ) {
    return await this.model.findByIdAndUpdate(id, update, options);
  }

  async findById (id: string) {
    return await this.model.findById(id);
  }

  async findOne (
    filter?: FilterQuery<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) {
    return await this.model.findOne(filter, projection, options);
  }

  async find (
    filter: FilterQuery<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) {
    return await this.model.find(filter, projection, options);
  }

  async create (data: T) {
    return await this.model.create(data);
  }

  async updateOne (
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: ModelUpdateOptions
  ) {
    return await this.model.updateOne(query, update, options);
  }

  async deleteOne (filter: FilterQuery<T>) {
    return await this.model.deleteOne(filter);
  }
}
