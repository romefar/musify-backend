import { ResponseImage } from 'src/models/ResponseImage';
import { ResponseLink } from 'src/models/ResponseLink';
import { Artist } from './Artist';
import { SimilarArtist } from './ArtistSimilar';

interface ResponseSimilar {
  artist: SimilarArtist<ResponseImage>[];
}

export interface ArtistResponse {
  artist: Artist<ResponseImage, ResponseLink, ResponseSimilar>;
}
