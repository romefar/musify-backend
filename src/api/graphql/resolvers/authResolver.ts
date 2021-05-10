import { Resolver, Mutation, Args } from 'type-graphql';
import { DEFAULT_TOKEN_EXP_TIME } from '../../../constants';
import { LoggedInUser, AuthLoginArgs } from '../schemas/Auth';
import userService from '../../services/user.service';
import authService from '../../services/authService';

@Resolver(LoggedInUser)
export class AuthResolver {
  @Mutation(returns => LoggedInUser)
  async login (
    @Args() { password, email }: AuthLoginArgs
  ): Promise<LoggedInUser> {
    const user = await userService.checkUserForLogin(password, email);
    const token = authService.signToken({ id: user.id, email: user.email }, DEFAULT_TOKEN_EXP_TIME);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    };
  }
}
