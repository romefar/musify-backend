import { Field, ID, Int, ObjectType } from 'type-graphql';
import { ArtistShortInfo } from '../ArtistShortInfo';
import { Image } from '../Image';

@ObjectType()
class Track {
  @Field()
  readonly name: string;

  @Field(type => ID)
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field(type => Int)
  readonly duration: number;

  @Field(type => Int)
  readonly listeners: number;

  @Field(type => Int)
  readonly playcount: number;

  @Field(type => ArtistShortInfo)
  readonly artist: ArtistShortInfo;

  @Field(type => [Image])
  readonly image: Image[];
}

@ObjectType()
export class TopTrack {
  @Field(type => Int)
  readonly page: number;

  @Field(type => [Track])
  readonly tracks: Track[];
}
