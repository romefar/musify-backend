import { Field, ObjectType } from 'type-graphql';
import { Link } from './Link';

@ObjectType()
export class Biography {
  @Field(type => Link)
  readonly links: Link;

  @Field()
  readonly published: string;

  @Field()
  readonly summary: string;

  @Field()
  readonly content: string;
}
