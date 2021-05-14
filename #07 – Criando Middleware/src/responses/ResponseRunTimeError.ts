import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

function responseRunTimeError(res: Response, status: HttpStatusCode, message: string) {
  const error = true;
  const body = {};

  return res.status(status).send({
    status, message, error, body,
  });
}

export default responseRunTimeError;
