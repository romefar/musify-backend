import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class ArtistInfoArgs {
  @Field()
  artist: string;

  @Field({ nullable: true })
  mbid?: string;
}

@ArgsType()
export class ArtistSearchArgs {
  @Field(type => Int, { nullable: true })
  readonly limit?: number;

  @Field(type => Int, { nullable: true })
  readonly page?: number;

  @Field()
  readonly artist: string;
}

@ArgsType()
export class ArtistTopArgs {
  @Field(type => Int, { nullable: true })
  readonly limit?: number;

  @Field(type => Int, { nullable: true })
  readonly page?: number;
}

@ArgsType()
export class ArtistTopAlbumsArgs extends ArtistTopArgs {
  @Field()
  artist: string;

  @Field({ nullable: true })
  mbid?: string;
}

@ArgsType()
export class ArtistTopTracksArgs extends ArtistTopArgs {
  @Field()
  artist: string;

  @Field({ nullable: true })
  mbid?: string;
}
