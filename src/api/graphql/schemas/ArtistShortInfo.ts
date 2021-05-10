import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ArtistShortInfo {
  @Field()
  readonly name: string;

  @Field(type => ID, { nullable: true })
  readonly mbid?: string;

  @Field()
  readonly url: string;
}
