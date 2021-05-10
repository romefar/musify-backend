import { TrackResponse, Track, SearchResponse, SearchResult, TopTracksResponse, TopTrack } from 'src/models/track';
import { normalizeImage } from './utils';

export const mapTrackInfoToSchema = (data: TrackResponse): Track => {
  const { track: trackData } = data;

  return trackData.album
    ? {
        ...trackData,
        album: {
          ...trackData.album,
          image: trackData.album.image.map(item => normalizeImage(item))
        }
      }
    : {
        ...trackData,
        album: undefined
      };
};

export const mapSearchResultsToSchema = (data: SearchResponse): SearchResult => {
  const { results } = data;

  return {
    totalResults: parseInt(results['opensearch:totalResults']),
    tracks: results.trackmatches.track.map(item => ({
      ...item,
      image: item.image.map(image => normalizeImage(image))
    })),
    page: results['opensearch:Query'].startPage
  };
};

export const mapTopTracksToSchema = (data: TopTracksResponse): TopTrack => {
  const { tracks } = data;

  return {
    page: parseInt(tracks['@attr'].page as string),
    tracks: tracks.track.map(item => ({
      ...item,
      image: item.image.map(img => normalizeImage(img))
    }))
  };
};
