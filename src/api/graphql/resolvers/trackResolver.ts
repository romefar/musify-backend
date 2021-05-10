import { Query, Resolver, Args, Ctx } from 'type-graphql';
import { Context } from 'src/models/Context';
import {
  mapSearchResultsToSchema,
  mapTrackInfoToSchema,
  mapTopTracksToSchema
} from '../../../mappers/mapTrackToSchema';
import { TrackInfo, TrackInfoArgs, TrackSearch, TrackSearchArgs, TopTrackArgs, TopTrack } from '../schemas/Track';

@Resolver()
export class TrackResolver {
  @Query(returns => TrackInfo)
  async track (
    @Args() args: TrackInfoArgs,
    @Ctx() ctx: Context
  ): Promise<TrackInfo> {
    const data = await ctx.dataSources.trackAPI.getTrackInfo(args);
    const mappedData = mapTrackInfoToSchema(data);

    return mappedData;
  }

  @Query(returns => TrackSearch)
  async searchTrack (
    @Args() args: TrackSearchArgs,
    @Ctx() ctx: Context
  ): Promise<TrackSearch> {
    const data = await ctx.dataSources.trackAPI.searchTrack(args);
    const mappedData = mapSearchResultsToSchema(data);

    return mappedData;
  }

  @Query(returns => TopTrack)
  async topTracks (
    @Args() args: TopTrackArgs,
    @Ctx() ctx: Context
  ): Promise<TopTrack> {
    const data = await ctx.dataSources.trackAPI.getTopTrack(args);
    const mappedData = mapTopTracksToSchema(data);

    return mappedData;
  }
}
