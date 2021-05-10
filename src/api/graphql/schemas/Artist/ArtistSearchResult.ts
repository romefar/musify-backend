import { Field, Int, ObjectType } from 'type-graphql';
import { ArtistSearchItem } from '../interfaces';

@ObjectType()
export class ArtistSearchResult {
  @Field(type => Int)
  readonly totalResults: number;

  @Field(type => [ArtistSearchItem])
  readonly artists: ArtistSearchItem[];

  @Field(type => Int)
  readonly page: number;
}
