import { Application } from 'express';
import { GraphQLSchema } from 'graphql';

export interface GraphQLServerOptions {
  app: Application;
  schema: GraphQLSchema;
  lastfmAPIKey: string;
  baseDataSourceURL: string;
}
