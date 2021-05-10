import { ResponseImage } from 'src/models';

export const normalizeImage = (item: ResponseImage) => ({
  size: item.size,
  text: item['#text']
});
