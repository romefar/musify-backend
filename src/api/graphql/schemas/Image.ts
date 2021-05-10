import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Image {
  @Field()
  readonly text: string;

  @Field()
  readonly size: string;
}
