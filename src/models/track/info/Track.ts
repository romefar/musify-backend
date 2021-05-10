import { AlbumShortInfo } from './AlbumShortInfo';
import { ArtistShortInfo } from '../../ArtistShortInfo';
import { Image } from 'src/models/Image';

export interface Track {
  name: string;
  mbid?: string;
  url: string;
  duration: number;
  listeners: number;
  playcount: number;
  artist: ArtistShortInfo;
  album?: AlbumShortInfo<Image>;
  wiki?: {
    published: string;
    summary: string;
    content: string;
  }
}
