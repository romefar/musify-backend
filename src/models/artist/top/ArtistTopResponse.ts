import { ResponseImage } from 'src/models/ResponseImage';
import { Artist } from './Artist';

export interface ArtistTopResponse {
  artists: {
    artist: Artist<ResponseImage>[];
    ['@attr']: {
      page: number;
    }
  }
}
