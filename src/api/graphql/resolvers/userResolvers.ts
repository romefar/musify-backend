import { Query, Resolver, Mutation, Arg, Authorized } from 'type-graphql';
import { DEFAULT_TOKEN_EXP_TIME } from '../../../constants';
import { IUser } from 'src/database';
import { User, UserInput, UserUpdatePasswordInput } from '../schemas/User';
import userService from '../../services/user.service';
import authService from '../../services/authService';

@Resolver(User)
export class UserResolver {
  @Query(returns => [User], { nullable: true })
  async users (): Promise<User[]> {
    return await userService.getAll();
  }

  @Query(returns => User, { nullable: true })
  @Authorized()
  async user (@Arg('id') id: string): Promise<User> {
    return await userService.getOneById(id);
  }

  @Mutation(returns => User)
  async createUser (
    @Arg('userInput') { name, password, image, email }: UserInput
  ): Promise<User> {
    const user = {
      name,
      password,
      image,
      email
    } as IUser;

    const createdUser = await userService.create(user);
    const token = authService.signToken({ id: createdUser.id, email: createdUser.email }, DEFAULT_TOKEN_EXP_TIME);

    return {
      ...createdUser.toJSON(),
      token
    };
  }

  @Mutation(returns => User)
  async updatePassword (
    @Arg('userInput') { id, newPassword, oldPassword }: UserUpdatePasswordInput
  ): Promise<User> {
    return await userService.updatePassword(id, oldPassword, newPassword);
  }
}
