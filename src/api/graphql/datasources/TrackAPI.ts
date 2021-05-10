import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { TrackSearchParams } from 'src/models/track/search/TrackSearchParams';
import { generateQueryParams } from '../../../common/generateQuery';
import {
  TrackResponse,
  TrackInfoParams,
  SearchResponse,
  TopTracksResponse,
  TopTrackParams
} from '../../../models/track';

export class TrackAPI extends RESTDataSource {
  constructor (baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest (request: RequestOptions) {
    request.params.set('api_key', this.context.lastfmAPIKey);
    request.params.set('format', 'json');
  }

  async getTrackInfo (options: TrackInfoParams): Promise<TrackResponse> {
    const queryObject = {
      ...options,
      artist: options.mbid ? undefined : options.artist,
      track: options.mbid ? undefined : options.track
    };

    const query = generateQueryParams(queryObject);

    return this.get(`?method=track.getInfo&${query}`);
  }

  async searchTrack (options: TrackSearchParams): Promise<SearchResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=track.search&${query}`);
  }

  async getTopTrack (options: TopTrackParams): Promise<TopTracksResponse> {
    const query = generateQueryParams({ ...options });

    return this.get(`?method=chart.gettoptracks&${query}`);
  }
}
