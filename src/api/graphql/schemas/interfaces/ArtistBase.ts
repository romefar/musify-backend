import { ID, Field, Int, ObjectType } from 'type-graphql';
import { Image } from '../Image';

@ObjectType()
export class ArtistBase {
  @Field()
  readonly name: string;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field(type => Int)
  readonly streamable: number;

  @Field(type => [Image])
  readonly image: Image[];
}
