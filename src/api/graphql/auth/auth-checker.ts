import { Context } from 'src/models';
import { AuthChecker } from 'type-graphql';

export const customAuthChecker: AuthChecker<Context> = (
  { context }
) => {
  return !!context.isAuth;
};
