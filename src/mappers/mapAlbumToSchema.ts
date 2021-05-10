import { Album, AlbumResponse, SearchResponse, SearchResult } from 'src/models/album';
import { normalizeImage } from './utils';

export const mapAlbumInfoToSchema = (data: AlbumResponse): Album => {
  const { album } = data;

  return {
    ...album,
    image: album.image.map(image => normalizeImage(image)),
    tracks: [...album.tracks.track]
  };
};

export const mapSearchResultsToSchema = (data: SearchResponse): SearchResult => {
  const { results } = data;

  return {
    totalResults: parseInt(results['opensearch:totalResults']),
    albums: results.albummatches.album.map(item => ({
      ...item,
      image: item.image.map(image => normalizeImage(image))
    })),
    page: results['opensearch:Query'].startPage
  };
};
