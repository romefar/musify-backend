import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class LoggedInUser {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  token: string;
}
