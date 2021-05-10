import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class TrackInfoArgs {
  @Field()
  readonly artist: string;

  @Field()
  readonly track: string;

  @Field({ nullable: true })
  readonly mbid?: string;
}

@ArgsType()
export class TopTrackArgs {
  @Field(type => Int, { nullable: true, defaultValue: 50 })
  readonly limit?: number;

  @Field(type => Int, { nullable: true, defaultValue: 1 })
  readonly page?: number;
}

@ArgsType()
export class TrackSearchArgs {
  @Field({ nullable: true })
  readonly artist: string;

  @Field()
  readonly track: string;

  @Field(type => Int, { nullable: true, defaultValue: 50 })
  readonly limit?: number;

  @Field(type => Int, { nullable: true, defaultValue: 1 })
  readonly page?: number;
}
