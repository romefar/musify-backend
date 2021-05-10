import { AlbumData } from './AlbumData';

export interface SearchResult {
  totalResults: number;
  albums: AlbumData[];
  page: number;
}
