import { Artist } from './Artist';

export interface SearchResult {
  totalResults: number;
  artists: Artist[];
  page: number;
}
