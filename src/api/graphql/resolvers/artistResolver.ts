import {
  mapArtistToSchema,
  mapArtistSearchResultToSchema,
  mapArtistTopToSchema,
  mapArtistTopAlbumsToSchema,
  mapArtistTopTracksToSchema
} from '../../../mappers/mapArtistToSchema';
import { Query, Resolver, Args, Ctx, Authorized } from 'type-graphql';
import { Artist, ArtistSearchResult, ArtistTop, ArtistTopArgs, ArtistTopAlbumsArgs, ArtistTopAlbums } from '../schemas';
import { ArtistSearchArgs, ArtistInfoArgs, ArtistTopTracksArgs } from '../schemas/Artist/args';
import { Context } from 'src/models/Context';
import { ArtistTopTracks } from '../schemas/Artist/ArtistTopTracks';

@Resolver()
export class ArtistResolver {
  @Query(returns => Artist)
  async artist (
    @Args() args: ArtistInfoArgs,
    @Ctx() ctx: Context
  ): Promise<Artist> {
    const data = await ctx.dataSources.artistAPI.getArtistInfo(args);
    const mappedData = mapArtistToSchema(data);

    return mappedData;
  }

  @Query(returns => ArtistSearchResult)
  @Authorized()
  async searchArtist (
    @Args() args: ArtistSearchArgs,
    @Ctx() ctx: Context
  ): Promise<ArtistSearchResult> {
    const data = await ctx.dataSources.artistAPI.searchArtist(args);
    const mappedData = mapArtistSearchResultToSchema(data);

    return mappedData;
  }

  @Query(returns => ArtistTop)
  async topArtists (
    @Args() args: ArtistTopArgs,
    @Ctx() ctx: Context
  ): Promise<ArtistTop> {
    const data = await ctx.dataSources.artistAPI.getTopArtists(args);
    const mappedData = mapArtistTopToSchema(data);

    return mappedData;
  }

  @Query(returns => ArtistTopAlbums)
  async topAlbums (
    @Args() args: ArtistTopAlbumsArgs,
    @Ctx() ctx: Context
  ): Promise<ArtistTopAlbums> {
    const data = await ctx.dataSources.artistAPI.getTopAlbums(args);
    const mappedData = mapArtistTopAlbumsToSchema(data);

    return mappedData;
  }

  @Query(returns => [ArtistTopTracks])
  async artistTopTracks (
    @Args() args: ArtistTopTracksArgs,
    @Ctx() ctx: Context
  ): Promise<ArtistTopTracks[]> {
    const data = await ctx.dataSources.artistAPI.getTopTracks(args);
    const mappedData = mapArtistTopTracksToSchema(data);

    return mappedData;
  }
}
