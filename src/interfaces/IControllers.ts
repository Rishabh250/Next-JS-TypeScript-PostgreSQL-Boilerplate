import { Request, Response } from 'express';

interface ICreate {
  create: (req: Request, res: Response) => void
}

interface IGetList {
  getList: (req: Request, res: Response) => void
}

interface IGetDetailsById {
  getDetailsById: (req: Request, res: Response) => void
}

interface IUpdate {
  update: (req: Request, res: Response) => void
}
export type {
  ICreate,
  IGetList,
  IGetDetailsById,
  IUpdate
};
