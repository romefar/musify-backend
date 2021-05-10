import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { generateQueryParams } from '../../../common/generateQuery';
import {
  AlbumResponse,
  AlbumInfoParams,
  AlbumSearchParams,
  SearchResponse
} from '../../../models/album';

export class AlbumAPI extends RESTDataSource {
  constructor (baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest (request: RequestOptions) {
    request.params.set('api_key', this.context.lastfmAPIKey);
    request.params.set('format', 'json');
  }

  async getAlbumInfo (options: AlbumInfoParams): Promise<AlbumResponse> {
    const queryObject = {
      ...options,
      artist: options.mbid ? undefined : options.artist,
      album: options.mbid ? undefined : options.album
    };

    const query = generateQueryParams(queryObject);

    return this.get(`?method=album.getInfo&${query}`);
  }

  async searchAlbum (options: AlbumSearchParams): Promise<SearchResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=album.search&${query}`);
  }
}
