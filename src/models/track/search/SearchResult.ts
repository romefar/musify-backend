import { Image } from 'src/models/Image';
import { TrackData } from './TrackData';

export interface SearchResult {
  totalResults: number;
  page: number;
  tracks: TrackData<Image>[];
}
