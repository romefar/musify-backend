import { ResponseImage } from 'src/models/ResponseImage';
import { Album } from './Album';
import { TrackData } from './TrackData';

export interface AlbumResponse {
  album: Omit<Album<ResponseImage>, 'tracks'> & { tracks: { track: TrackData[] } };
}
