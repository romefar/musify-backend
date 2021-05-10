
import { IUser } from 'src/database';
import { UserRepository, userRepository } from '../repositories';
import bcrypt from 'bcryptjs';

interface IUserService {
  getAll: () => Promise<IUser[]>;
  getOneById: (id: string) => Promise<IUser | null>;
  getOneByEmail: (email: string) => Promise<IUser | null>;
  create: (data: IUser) => Promise<IUser>;
  delete: (id: string) => Promise<boolean>;
  update: (data: IUser) => Promise<IUser>;
  updatePassword: (id: string, oldPass: string, newPass: string) => Promise<IUser>;
}

class UserService implements IUserService {
  private readonly repository: UserRepository;

  constructor () {
    this.repository = userRepository;
  }

  async getAll () {
    return await this.repository.find({}, 'name image email id');
  }

  async getOneById (id: string) {
    const user = await this.repository.findOne({ _id: id });

    if (!user) {
      throw new Error('User does not exist.');
    }

    return user;
  }

  async getOneByEmail (email: string) {
    const user = await this.repository.findOne({ email: email });

    if (!user) {
      throw new Error('User does not exist.');
    }

    return user;
  }

  async checkUserForLogin (password: string, email: string) {
    const user = await this.repository.findOne({ email: email });

    if (!user) {
      throw new Error('User does not exist.');
    }

    const userPass = user.password;
    const isValidPass = await bcrypt.compare(password, userPass);

    if (!isValidPass) {
      throw new Error('Wrong credentials.');
    }

    return user;
  }

  async create (data: IUser) {
    const { email } = data;

    const isUserExists = await this.repository.findOne({ email: email });

    if (isUserExists) {
      throw new Error('User is already exists.');
    }

    const createdUser = await this.repository.create(data);

    // Add Cloudinary service layer [POST]

    return createdUser;
  }

  async delete (id: string) {
    const isUserExists = await this.repository.findById(id);

    if (isUserExists) {
      throw new Error('Cannot find the user.');
    }

    const deletedUser = await this.repository.deleteOne({ _id: id });

    // Add Cloudinary service layer [DELETE]

    return !!deletedUser.ok;
  }

  async update (data: IUser) {
    const { id } = data;

    const isUserExists = await this.repository.findById(id);

    if (!isUserExists) {
      throw new Error('User does not exist.');
    }

    const updatedUser = await this.repository.findByIdAndUpdate(id, data);

    if (!updatedUser) {
      throw new Error('User does not exist.');
    }

    // Add Cloudinary service layer [PUT]

    return updatedUser;
  }

  async updatePassword (id: string, oldPass: string, newPass: string) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User does not exist.');
    }

    const userPass = user.password;
    const isValidPass = await bcrypt.compare(oldPass, userPass);

    if (!isValidPass) {
      throw new Error('Password changing failed.');
    }

    const password = await bcrypt.hash(newPass, 8);

    const updatedUser = await this.repository
      .findByIdAndUpdate(id, { password }, { new: true, fields: 'name image email id' });

    if (!updatedUser) {
      throw new Error('Failed to update a user.');
    }

    return updatedUser;
  }
}

export default new UserService();
