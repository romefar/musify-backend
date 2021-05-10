import { Image } from 'src/models';
import { SearchMeta } from '../SearchMeta';

export interface Album<TImage = Image> extends SearchMeta<TImage> {
  playcount: number;
}
