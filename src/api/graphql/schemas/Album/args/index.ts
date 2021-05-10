import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class AlbumInfoArgs {
  @Field()
  readonly artist: string;

  @Field()
  readonly album: string;

  @Field({ nullable: true })
  readonly mbid?: string;

  @Field({ nullable: true })
  readonly lang?: string;
}

@ArgsType()
export class AlbumSearchArgs {
  @Field()
  readonly album: string;

  @Field(type => Int, { nullable: true })
  readonly limit?: number;

  @Field(type => Int, { nullable: true })
  readonly page?: number;
}
