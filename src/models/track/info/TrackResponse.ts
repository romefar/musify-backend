import { AlbumShortInfo } from './AlbumShortInfo';
import { ArtistShortInfo } from '../../ArtistShortInfo';
import { ResponseImage } from 'src/models/ResponseImage';

interface Track {
  name: string;
  mbid?: string;
  url: string;
  duration: number;
  listeners: number;
  playcount: number;
  artist: ArtistShortInfo;
  album?: AlbumShortInfo<ResponseImage>;
  wiki?: {
    published: string;
    summary: string;
    content: string;
  }
}

export interface TrackResponse {
  track: Track;
}
