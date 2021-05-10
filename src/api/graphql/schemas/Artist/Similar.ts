import { Field, ObjectType } from 'type-graphql';
import { Image } from '../Image';

@ObjectType()
export class SimilarArtist {
  @Field()
  readonly name: string;

  @Field()
  readonly url: string;

  @Field(type => [Image])
  readonly image: Image[];
}
