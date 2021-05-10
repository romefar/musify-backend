import { AlbumInfo, IAlbumInfo, IAlbumInfoPopulated } from '../../database';
import { BaseRepository } from './base.repository';
import { Document, FilterQuery, QueryOptions } from 'mongoose';

interface IAlbumInfoRepository {
  findAllPopulated: (
    filter: FilterQuery<IAlbumInfo>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) => Promise<Array<IAlbumInfoPopulated>>;
  findByIdPopulated: (id: string) => Promise<Document<IAlbumInfoRepository> | null>;
}

export class AlbumInfoRepository extends BaseRepository<IAlbumInfo> implements IAlbumInfoRepository {
  constructor () {
    super(AlbumInfo);
  }

  public async findAllPopulated (
    filter: FilterQuery<IAlbumInfo>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projection?: any | null,
    options?: QueryOptions | null
  ) {
    return await this.model
      .find(filter, projection, options)
      .populate('comments') as IAlbumInfoPopulated[];
  }

  public async findByIdPopulated (id: string) {
    return await this.model
      .findById(id)
      .populate('comments') as IAlbumInfoPopulated;
  }
}

export default new AlbumInfoRepository();
