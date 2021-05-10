import { Image } from '../../Image';

export interface AlbumData<T = Image> {
  name: string;
  artist: string;
  url: string;
  image: T[];
  mbid: string;
}
