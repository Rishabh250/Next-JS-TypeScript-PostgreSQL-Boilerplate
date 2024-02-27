import { Service as DIService } from 'typedi';
import { Router } from 'express';
import { UserRoutes } from './user';

@DIService()
class Routes {
  private router: Router;

  constructor(userRoutes: UserRoutes) {
    this.router = Router();
    this.router.use(userRoutes.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default Routes ;