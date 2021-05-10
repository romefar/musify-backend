import { Query, Resolver, Args, Ctx } from 'type-graphql';
import { Context } from 'src/models/Context';
import {
  mapAlbumInfoToSchema,
  mapSearchResultsToSchema
} from '../../../mappers/mapAlbumToSchema';
import { AlbumInfo, AlbumInfoArgs, AlbumSearch, AlbumSearchArgs } from '../schemas/Album';

@Resolver()
export class AlbumResolver {
  @Query(returns => AlbumInfo)
  async album (
    @Args() args: AlbumInfoArgs,
    @Ctx() ctx: Context
  ): Promise<AlbumInfo> {
    const data = await ctx.dataSources.albumAPI.getAlbumInfo(args);
    const mappedData = mapAlbumInfoToSchema(data);

    return mappedData;
  }

  @Query(returns => AlbumSearch)
  async searchAlbum (
    @Args() args: AlbumSearchArgs,
    @Ctx() ctx: Context
  ): Promise<AlbumSearch> {
    const data = await ctx.dataSources.albumAPI.searchAlbum(args);
    const mappedData = mapSearchResultsToSchema(data);

    return mappedData;
  }
}
