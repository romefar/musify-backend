import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { generateQueryParams } from '../../../common/generateQuery';
import { ArtistResponse, ArtistInfoParams } from 'src/models/artist/info';
import { ArtistSearchParams, SearchResponse } from 'src/models/artist/search';
import { ArtistTopResponse, ArtistTopParams } from 'src/models/artist/top';
import { TopAlbumsResponse, TopAlbumsParams } from 'src/models/artist/top-albums';
import { TopTracksResponse, TopTracksParams } from 'src/models/artist/top-tracks';

export class ArtistsAPI extends RESTDataSource {
  constructor (baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest (request: RequestOptions) {
    request.params.set('api_key', this.context.lastfmAPIKey);
    request.params.set('format', 'json');
  }

  async getArtistInfo (options: ArtistInfoParams): Promise<ArtistResponse> {
    const queryObject = {
      ...options,
      artist: options.mbid ? undefined : options.artist
    };

    const query = generateQueryParams(queryObject);

    return this.get(`?method=artist.getinfo&${query}`);
  }

  async searchArtist (options: ArtistSearchParams): Promise<SearchResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=artist.search&${query}`);
  }

  async getTopArtists (options: ArtistTopParams): Promise<ArtistTopResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=chart.gettopartists&${query}`);
  }

  async getTopAlbums (options: TopAlbumsParams): Promise<TopAlbumsResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=artist.gettopalbums&${query}`);
  }

  async getTopTracks (options: TopTracksParams): Promise<TopTracksResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=artist.gettoptracks&${query}`);
  }
}
