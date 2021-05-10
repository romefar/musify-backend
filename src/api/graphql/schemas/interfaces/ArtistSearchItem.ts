import { Field, ObjectType, Int } from 'type-graphql';
import { ArtistBase } from './ArtistBase';

@ObjectType()
export class ArtistSearchItem extends ArtistBase {
  @Field(type => Int)
  readonly listeners: number;
}
