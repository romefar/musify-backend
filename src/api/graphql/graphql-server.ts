import { ApolloServer } from 'apollo-server-express';
import { ArtistsAPI, TrackAPI, AlbumAPI } from './datasources';
import { GraphQLServerOptions } from 'src/models/GraphQLServerOptions';
import { loggingPlugin } from './plugins';
import authService from '../services/authService';

export const startGraphQLServer = (options: GraphQLServerOptions) => {
  const {
    app,
    schema,
    baseDataSourceURL,
    lastfmAPIKey
  } = options;

  const graphQLServer = new ApolloServer({
    schema,
    // cache: new BaseRedisCache({
    //   client: new Redis({
    //     host: 'redis-server'
    //   })
    // }),
    dataSources: () => {
      return {
        artistAPI: new ArtistsAPI(baseDataSourceURL),
        trackAPI: new TrackAPI(baseDataSourceURL),
        albumAPI: new AlbumAPI(baseDataSourceURL)
      };
    },
    plugins: [loggingPlugin],
    context: ({ req }) => {
      const res = {
        lastfmAPIKey
      };

      const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : '';

      if (!token) {
        return res;
      }

      const isTokenValid = authService.verifyToken(token);

      if (isTokenValid) {
        return {
          ...res,
          isAuth: true
        };
      }

      return res;
    }
  });

  graphQLServer.applyMiddleware({ app });
};
