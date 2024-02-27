import { Service as DIService } from 'typedi';
import { Router } from 'express';
import UserController  from '../controllers/user';

@DIService()
export class UserRoutes {
  public router: Router;

  constructor(userController: UserController) {
    this.router = Router();
    this.initializeRoutes(userController);
  }

  private initializeRoutes(userController: UserController): void {
    this.router.post('/user', userController.create);
    this.router.get('/users', userController.getList);
    this.router.get('/user', userController.getDetailsById);
    this.router.put('/user', userController.update);
  }

  public getRouter(): Router {
    return this.router;
  }
}
