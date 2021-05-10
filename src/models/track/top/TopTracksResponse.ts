import { ResponseImage } from 'src/models/ResponseImage';
import { TopTrackItem } from './Track';

export interface TopTracksResponse {
  tracks: {
    track: TopTrackItem<ResponseImage>[];
    ['@attr']: {
      page: string;
    }
  },
}
