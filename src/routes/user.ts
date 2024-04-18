import { Service as DIService, Inject } from 'typedi';
import { Router } from 'express';
import UserController from '../controllers/user';

@DIService()
export class UserRoutes {
  public router: Router;

  constructor (@Inject() private readonly userController: UserController) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes (): void {
    this.router.post('/user', async (req, res) => this.userController.create(req, res));
    this.router.get('/users', async (req, res) => this.userController.getList(req, res));
    this.router.get('/user', async (req, res) => this.userController.getDetailsById(req, res));
    this.router.put('/user', async (req, res) => this.userController.update(req, res));
  }

  public getRouter (): Router {
    return this.router;
  }
}
