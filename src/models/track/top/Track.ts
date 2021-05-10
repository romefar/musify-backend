import { Image, ArtistShortInfo } from 'src/models';

export interface Track<TImage = Image> {
  name: string;
  duration: number;
  playcount: number;
  listeners: number;
  mbid: string;
  url: string;
  artist: ArtistShortInfo;
  image: TImage[];
}

export interface TopTrack {
  page: number;
  tracks: Track[];
}
