import { Image } from 'src/models';
import { SearchMeta } from '../SearchMeta';

export interface Track<TImage = Image> extends SearchMeta<TImage> {
  playcount: number;
  listeners: number;
  streamable: 0 | 1;
}
