import { Biography } from '../Biography';
import { Tag } from '../Tag';
import { Image } from 'src/models/Image';
import { Link } from '../Link';
import { SimilarArtist } from './ArtistSimilar';

export interface Artist<TImage = Image, TLink = Link, TSimilar = SimilarArtist<TImage>[]> {
  name: string;
  playcount: number;
  listeners: number;
  mbid: string;
  url: string;
  streamable: 0 | 1;
  image: TImage[];
  ontour: 0 | 1;
  tags: {
    tag: Tag[];
  };
  stats: {
    listeners: number;
    playcount: number;
  };
  similar: TSimilar;
  bio: Biography<TLink>;
}
