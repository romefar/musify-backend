import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Image } from '../Image';

@ObjectType()
class AlbumData {
  @Field()
  readonly name: string;

  @Field(type => ID)
  readonly mbid: string;

  @Field()
  readonly url: string;

  @Field()
  readonly artist: string;

  @Field(type => [Image])
  readonly image: Image[];
}

@ObjectType()
export class AlbumSearch {
  @Field(type => Int)
  readonly totalResults: number;

  @Field(type => [AlbumData])
  readonly albums: AlbumData[];

  @Field(type => Int)
  readonly page: number;
}
