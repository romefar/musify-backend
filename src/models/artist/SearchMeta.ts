import { Image } from '../Image';

export interface SearchMeta<TImage = Image> {
  name: string;
  mbid?: string;
  url: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  }
  image: TImage[]
}
