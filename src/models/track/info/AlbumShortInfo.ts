export interface AlbumShortInfo<T> {
  artist: string;
  title: string;
  mbid?: string;
  url: string;
  image: T[];
}
