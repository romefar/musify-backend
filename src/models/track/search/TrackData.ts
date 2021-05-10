export interface TrackData<T> {
  name: string;
  mbid?: string;
  url: string;
  listeners: number;
  artist: string;
  image: T[];
}
