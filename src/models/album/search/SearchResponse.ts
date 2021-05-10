import { ResponseImage } from 'src/models';
import { AlbumData } from './AlbumData';

export interface SearchResponse {
  results: {
    ['opensearch:totalResults']: string;
    ['opensearch:Query']: {
      startPage: number;
    };
    albummatches: {
      album: AlbumData<ResponseImage>[];
    }
  };
}
