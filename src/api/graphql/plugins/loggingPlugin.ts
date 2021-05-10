import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import logger from '../../../common/logger';

export const loggingPlugin: ApolloServerPlugin = {
  requestDidStart () {
    return {
      didEncounterErrors (errorCtx) {
        logger.error(`An error has occurred. Error: ${errorCtx.errors.map(i => i.message)}`);
      }
    };
  },
  serverWillStart () {
    logger.info('Apollo server is starting.');
  }
};
