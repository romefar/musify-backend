import { Field, Int, ObjectType } from 'type-graphql';
import { ArtistBase } from '../interfaces';
import { Biography } from './Biography';
import { SimilarArtist } from './Similar';
import { Stat } from './Stat';
import { Tag } from './Tag';

@ObjectType()
export class Artist extends ArtistBase {
  @Field(type => Int)
  readonly ontour: number;

  @Field(type => Tag)
  readonly tags: Tag

  @Field(type => Stat)
  readonly stats: Stat;

  @Field(type => [SimilarArtist])
  readonly similar: SimilarArtist[];

  @Field(type => Biography)
  readonly bio: Biography;
}
