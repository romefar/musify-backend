import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Image } from '../Image';

@ObjectType()
class TrackShortInfo {
  @Field()
  readonly name: string;

  @Field()
  readonly url: string;

  @Field()
  readonly duration: number;
}

@ObjectType()
class AlbumWiki {
  @Field()
  readonly published: string;

  @Field()
  readonly summary: string;

  @Field()
  readonly content: string;
}

@ObjectType()
export class AlbumInfo {
  @Field()
  readonly name: string;

  @Field()
  readonly artist: string;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field(type => [Image])
  readonly image: Image[];

  @Field(type => Int)
  readonly listeners: number;

  @Field(type => Int)
  readonly playcount: number;

  @Field(type => [TrackShortInfo])
  readonly tracks: TrackShortInfo[];

  @Field(type => AlbumWiki, { nullable: true })
  readonly wiki?: AlbumWiki;
}
