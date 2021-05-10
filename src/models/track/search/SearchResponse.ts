import { ResponseImage } from 'src/models/ResponseImage';
import { TrackData } from './TrackData';

export interface SearchResponse {
  results: {
    ['opensearch:totalResults']: string;
    ['opensearch:Query']: {
      startPage: number;
    };
    trackmatches: {
      track: TrackData<ResponseImage>[];
    }
  };
}
