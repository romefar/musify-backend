import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CustomError from '../common/custom-errors/customError';
import logger from '../common/logger';

dotenv.config();

const user = process.env.MONGO_DB_USER_DEV;
const pass = process.env.MONGO_DB_PASS_DEV;
const dbName = process.env.MONGO_DB_NAME;

const connectionUrl =
  `mongodb+srv://${user}:${pass}@cluster0.ekpdd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      connectionUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );

    logger.info(`Successfully connected to a database [${dbName}].`);

    return connection;
  } catch (error) {
    logger.error(`An error has occurred while connecting to a database. ${error?.message}`);
    throw new CustomError(error.message, 'Could not connect to the database');
  }
};
