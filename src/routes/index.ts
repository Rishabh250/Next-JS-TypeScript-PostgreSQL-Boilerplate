import { Service as DIService, Inject } from 'typedi';
import { Router } from 'express';
import { UserRoutes } from './user';

@DIService()
class Routes {
  private readonly router: Router;

  constructor (@Inject() private readonly userRoutes: UserRoutes) {
    this.router = Router();
    this.router.use(this.userRoutes.getRouter());
  }

  public getRouter (): Router {
    return this.router;
  }
}

export default Routes;
