import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class AuthLoginArgs {
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
