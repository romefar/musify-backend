import { Field, Int, ObjectType, ID } from 'type-graphql';
import { ArtistShortInfo } from '../ArtistShortInfo';
import { Image } from '../Image';

@ObjectType()
export class ArtistTopTracks {
  @Field()
  readonly name: string;

  @Field(type => Int)
  readonly playcount: number;

  @Field(type => Int)
  readonly listeners: number;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field(type => Int)
  readonly streamable: number;

  @Field(type => [Image])
  readonly image: Image[];

  @Field(type => ArtistShortInfo)
  readonly artist: ArtistShortInfo;
}
