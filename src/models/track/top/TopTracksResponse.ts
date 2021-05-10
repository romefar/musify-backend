import { ResponseImage } from 'src/models/ResponseImage';
import { Track } from './Track';

export interface TopTracksResponse {
  tracks: {
    track: Track<ResponseImage>[];
    ['@attr']: {
      page: string;
    }
  },
}
