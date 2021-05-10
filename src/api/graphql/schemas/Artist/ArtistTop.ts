import { Field, Int, ObjectType } from 'type-graphql';
import { ArtistBase } from '../interfaces';

@ObjectType()
class ArtistTopItem extends ArtistBase {
  @Field(type => Int)
  readonly playcount: number;

  @Field(type => Int)
  readonly listeners: number;
}

@ObjectType()
export class ArtistTop {
  @Field(type => [ArtistTopItem])
  readonly artists: ArtistTopItem[]

  @Field(type => Int)
  readonly page: number;
}
