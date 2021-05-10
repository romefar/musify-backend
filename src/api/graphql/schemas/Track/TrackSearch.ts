import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Image } from '../Image';

@ObjectType()
class TrackData {
  @Field()
  readonly name: string;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field()
  readonly artist: string;

  @Field(type => Int)
  readonly listeners: number;

  @Field(type => [Image])
  readonly image: Image[];
}

@ObjectType()
export class TrackSearch {
  @Field(type => Int)
  readonly totalResults: number;

  @Field(type => [TrackData])
  readonly tracks: TrackData[];

  @Field(type => Int)
  readonly page: number;
}
