import { Artist, ArtistResponse } from 'src/models/artist/info';
import { SearchResult, SearchResponse } from 'src/models/artist/search';
import { ArtistTop, ArtistTopResponse } from 'src/models/artist/top';
import { TopAlbums, TopAlbumsResponse } from 'src/models/artist/top-albums';
import { Track, TopTracksResponse } from 'src/models/artist/top-tracks';
import { normalizeImage } from './utils';

export const mapArtistToSchema = (data: ArtistResponse): Artist => {
  const { artist } = data;
  const { bio: { links: { link } }, similar } = artist;

  const normalizedSimilarArtists = similar.artist.map(item => ({
    ...item,
    image: item.image.map(imageItem => normalizeImage(imageItem))
  }));

  return {
    ...artist,
    image: artist.image.map(item => normalizeImage(item)),
    similar: normalizedSimilarArtists,
    bio: {
      ...artist.bio,
      links: {
        link: {
          text: link['#text'],
          rel: link.rel,
          href: link.href
        }
      }
    }
  };
};

export const mapArtistSearchResultToSchema = (data: SearchResponse): SearchResult => {
  const { results } = data;
  const { artistmatches: { artist } } = results;

  return {
    totalResults: results['opensearch:totalResults'],
    artists: artist.map(item => ({
      ...item,
      image: item.image.map(imageItem => normalizeImage(imageItem))
    })),
    page: results['opensearch:Query'].startPage
  };
};

export const mapArtistTopToSchema = (data: ArtistTopResponse): ArtistTop => {
  const { artists: { artist } } = data;

  return {
    artists: artist.map(item => ({
      ...item,
      image: item.image.map(imageItem => normalizeImage(imageItem))
    })),
    page: data.artists['@attr'].page
  };
};

export const mapArtistTopAlbumsToSchema = (data: TopAlbumsResponse): TopAlbums => {
  const { topalbums } = data;
  const { album } = topalbums;

  return {
    albums: album.map(item => ({
      ...item,
      image: item.image.map(imageItem => normalizeImage(imageItem))
    }))
  };
};

export const mapArtistTopTracksToSchema = (data: TopTracksResponse): Track[] => {
  const { toptracks: { track } } = data;

  return track.map(item => ({
    ...item,
    image: item.image.map(imageItem => normalizeImage(imageItem))
  }));
};
