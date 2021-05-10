import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID, { nullable: true })
  id?: string

  @Field()
  name: string

  @Field()
  email: string

  @Field({ nullable: true })
  image: string

  @Field({ nullable: true })
  provider?: string;

  @Field({ nullable: true })
  token?: string;
}
