import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';
import logger from './common/logger';
import { connectToDB } from './database';
import { startGraphQLServer } from './api/graphql/graphql-server';
import { customAuthChecker } from './api/graphql/auth/auth-checker';
import { buildSchema } from 'type-graphql';
import { ArtistResolver, TrackResolver, UserResolver, AlbumResolver, AuthResolver } from './api/graphql/resolvers';

dotenv.config();

(async () => {
  const port = process.env.PORT || 4000;
  const apiKey = process.env.LAST_FM_API_KEY as string;
  const app = express();

  app.use(cors({
    origin: '*'
  }));
  app.use(express.json());

  const schema = await buildSchema({
    resolvers: [ArtistResolver, TrackResolver, UserResolver, AlbumResolver, AuthResolver],
    authChecker: customAuthChecker,
    emitSchemaFile: true
  });

  await connectToDB();

  await startGraphQLServer({
    app,
    schema,
    lastfmAPIKey: apiKey,
    baseDataSourceURL: 'http://ws.audioscrobbler.com/2.0/'
  });

  app.listen(port, () => {
    logger.info(`Express server has started on port ${port}.`);
  });
})();
