import winston from 'winston';

class WinstonLogger {
  static init () {
    const transports = [
      new winston.transports.Console()
    ];

    return winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp()
      ),
      transports
    });
  }
}

const logger = WinstonLogger.init();

export default logger;
