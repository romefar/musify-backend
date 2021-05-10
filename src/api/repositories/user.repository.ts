import { BaseRepository } from './base.repository';
import { User, IUser } from '../../database';

export class UserRepository extends BaseRepository<IUser> {
  constructor () {
    super(User);
  }
}

export default new UserRepository();
