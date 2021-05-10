import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class UserInfoArgs {
  @Field()
  id: string;
}
