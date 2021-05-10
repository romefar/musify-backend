import { ResponseImage } from 'src/models/ResponseImage';
import { Artist } from './Artist';

export interface SearchResponse {
  results: {
    ['opensearch:totalResults']: number;
    ['opensearch:Query']: {
      startPage: number;
    };
    artistmatches: {
      artist: Artist<ResponseImage>[]
    };
  }
}
