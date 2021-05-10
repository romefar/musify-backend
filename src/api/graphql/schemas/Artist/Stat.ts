import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Stat {
  @Field(type => Int)
  readonly listeners: number;

  @Field(type => Int)
  readonly playcount: number;
}
