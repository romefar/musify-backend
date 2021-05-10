import { ResponseImage } from 'src/models/ResponseImage';
import { Album } from './Album';

export interface TopAlbumsResponse {
  topalbums: {
    album: Album<ResponseImage>[]
  }
}
