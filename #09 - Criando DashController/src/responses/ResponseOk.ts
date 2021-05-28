import { Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

function responseOk(res: Response, body: any) {
  const status = HttpStatusCode.OK;
  const message = 'Ok';
  const error = false;

  return res.status(status).send({
    status, message, error, body,
  });
}

export default responseOk;
