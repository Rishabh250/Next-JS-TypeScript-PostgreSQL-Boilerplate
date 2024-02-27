/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response, NextFunction } from 'express';
import AppConstants from '../utils/constant';

const { RESPONSE_ERROR: { SERVER_ERROR, INTERNAL_SERVER_ERROR, NOT_AUTHORIZED, NOT_FOUND, FORBIDDEN }, ERROR } = AppConstants;

export const responseMiddleware = (req: Request, res: Response, next: NextFunction): void => {

  res.postRequest = () => {

    return res.status(201).json();
  }
  res.getRequest = (data: any) => {
    return res.status(200).json(data);
  };

  res.updated = () => {
    return res.status(204).json();
  };

  res.badRequest = (name: string, error: string) => {
    return res.status(400).json({ name, error });
  };

  res.unAuthorized = () => {
    return res.status(401).json({ name: ERROR, error: [ { message: NOT_AUTHORIZED } ] });
  };

  res.forbidden = () => {
    return res.status(403).json({ name: ERROR, error: [ { message: FORBIDDEN } ] });
  };

  res.notFound = () => {
    return res.status(404).json({ name: ERROR, error: { message: NOT_FOUND } });
  };

  res.serverError = () => {
    return res.status(500).json({ name: SERVER_ERROR, error: [ { message: INTERNAL_SERVER_ERROR } ] });
  };

  next();
};