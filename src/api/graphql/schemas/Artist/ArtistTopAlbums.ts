import { Field, Int, ObjectType, ID } from 'type-graphql';
import { ArtistShortInfo } from '../ArtistShortInfo';
import { Image } from '../Image';

@ObjectType()
class ArtistAlbumItem {
  @Field()
  readonly name: string;

  @Field(type => Int)
  readonly playcount: number;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;

  @Field(type => [Image])
  readonly image: Image[];

  @Field(type => ArtistShortInfo)
  readonly artist: ArtistShortInfo
}

@ObjectType()
export class ArtistTopAlbums {
  @Field(type => [ArtistAlbumItem])
  readonly albums: ArtistAlbumItem[]
}
