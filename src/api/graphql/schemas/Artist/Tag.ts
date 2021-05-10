import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class TagItem {
  @Field()
  readonly name: string;

  @Field()
  readonly url: string;
}

@ObjectType()
export class Tag {
  @Field(type => [TagItem])
  readonly tag: TagItem[];
}
