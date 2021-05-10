import { ResponseImage } from 'src/models/ResponseImage';
import { Track } from './Track';

export interface TopTracksResponse {
  toptracks: {
    track: Track<ResponseImage>[];
  }
}
