
import { FilterQuery } from 'mongoose';
import { IAlbumInfo, IAlbumInfoPopulated } from 'src/database';
import { albumRepository, AlbumInfoRepository } from '../repositories';

interface IAlbumInfoService {
  getAll: (filter: FilterQuery<IAlbumInfo>) => Promise<IAlbumInfo[]>;
  getAllPopulated: (filter: FilterQuery<IAlbumInfo>) => Promise<IAlbumInfoPopulated[] | null>;
  getOneByIdPopulated: (id: string) => Promise<IAlbumInfoPopulated | null>;
  getOneById: (id: string) => Promise<IAlbumInfo | null>;
  create: (data: IAlbumInfo) => Promise<IAlbumInfo>;
  delete: (id: string) => Promise<boolean>;
  update: (data: IAlbumInfo) => Promise<IAlbumInfo>;
}

class AlbumInfoService implements IAlbumInfoService {
  private readonly repository: AlbumInfoRepository;

  constructor () {
    this.repository = albumRepository;
  }

  async getAll (filter: FilterQuery<IAlbumInfo>) {
    return await this.repository.find(filter);
  }

  async getAllPopulated (filter: FilterQuery<IAlbumInfo>) {
    return await this.repository.findAllPopulated(filter);
  }

  async getOneById (id: string) {
    return await this.repository.findById(id);
  }

  async getOneByIdPopulated (id: string) {
    return await this.repository.findById(id);
  }

  async create (data: IAlbumInfo) {
    return await this.repository.create(data);
  }

  async delete (id: string) {
    const isInfo = await this.repository.findById(id);

    if (isInfo) {
      throw new Error('Does not exist.');
    }

    const deletedInfo = await this.repository.deleteOne({ _id: id });

    return !!deletedInfo.ok;
  }

  async update (data: IAlbumInfo) {
    const { id } = data;

    const isExists = await this.repository.findById(id);

    if (!isExists) {
      throw new Error('Does not exist.');
    }

    const updatedInfo = await this.repository.findByIdAndUpdate(id, data);

    if (!updatedInfo) {
      throw new Error('Cannot update info.');
    }

    return updatedInfo;
  }
}

export default new AlbumInfoService();
