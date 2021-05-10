import CustomError from './customError';

export default class HttpError extends CustomError {
  httpStatusCode:number;

  constructor (message: string, httpStatusCode: number, clientMessage: string) {
    super(message, clientMessage);
    this.httpStatusCode = httpStatusCode;
  }
}
