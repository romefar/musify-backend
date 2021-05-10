import { Image } from '../../Image';
import { TrackData } from './TrackData';

export interface Album<T = Image, R = TrackData> {
  name: string;
  artist: string;
  mbid?: string;
  url: string;
  image: T[];
  duration: number;
  listeners: number;
  playcount: number;
  tracks: R[];
  wiki?: {
    published: string;
    summary: string;
    content: string;
  }
}
