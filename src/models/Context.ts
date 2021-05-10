import { ExpressContext } from 'apollo-server-express';
import { TrackAPI, ArtistsAPI, AlbumAPI } from 'src/api/graphql/datasources';

export interface Context extends ExpressContext {
  dataSources: {
    artistAPI: ArtistsAPI,
    trackAPI: TrackAPI,
    albumAPI: AlbumAPI
  },
  isAuth?: boolean;
}
