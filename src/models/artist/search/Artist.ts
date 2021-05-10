import { Image } from 'src/models/Image';

export interface Artist<TImage = Image> {
  name: string;
  listeners: number;
  mbid: string;
  url: string;
  streamable: 0 | 1;
  image: TImage[];
}
