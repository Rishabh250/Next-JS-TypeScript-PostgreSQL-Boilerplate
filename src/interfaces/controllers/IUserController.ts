import { Request, Response } from "express";

interface IUserController {
    create(req: Request, res: Response): void;
    getList(req: Request, res: Response): void;
    getDetailsById(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
}

export default IUserController;