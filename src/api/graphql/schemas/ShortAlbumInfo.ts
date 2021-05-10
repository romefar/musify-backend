import { Field, ID, ObjectType } from 'type-graphql';
import { Image } from './Image';

@ObjectType()
export class ShortAlbumInfo {
  @Field()
  readonly artist: string;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly title: string;

  @Field()
  readonly url: string;

  @Field(type => [Image])
  readonly image: Image[];
}
