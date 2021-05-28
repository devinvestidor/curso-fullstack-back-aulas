import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/HttpException';
import HttpStatusCode from '../responses/HttpStatusCode';
import responseRunTimeError from '../responses/ResponseRunTimeError';

function runTimeErrorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = error.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Erro não identificado.';

  responseRunTimeError(res, status, message);
}

export default runTimeErrorMiddleware;
