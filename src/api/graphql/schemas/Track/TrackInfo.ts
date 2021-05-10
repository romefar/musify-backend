import { Field, ID, Int, ObjectType } from 'type-graphql';
import { ArtistShortInfo } from '../ArtistShortInfo';
import { ShortAlbumInfo } from '../ShortAlbumInfo';

@ObjectType()
class TrackWiki {
  @Field()
  readonly published: string;

  @Field()
  readonly summary: string;

  @Field()
  readonly content: string;
}

@ObjectType()
export class TrackInfo {
  @Field()
  readonly name: string;

  @Field(type => ID, { nullable: true })
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

  @Field(type => ShortAlbumInfo, { nullable: true })
  readonly album?: ShortAlbumInfo;

  @Field(type => TrackWiki, { nullable: true })
  readonly wiki?: TrackWiki;
}
