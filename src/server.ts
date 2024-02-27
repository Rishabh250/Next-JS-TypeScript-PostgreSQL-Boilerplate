import 'reflect-metadata';
import { Container } from 'typedi';
import express, { Application } from 'express';
import { responseMiddleware } from './middleware/response-handlers';
import Routes from './routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
    this.start();
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(responseMiddleware);
  }

  private setRoutes(): void {
    const routes = Container.get(Routes);

    this.app.use('/v1/users', routes.getRouter());
  }

  private start(): void {
    const port = process.env.PORT || 3000;

    // eslint-disable-next-line no-console
    this.app.listen(port, () => console.log(`Server running on port ${port}`));
  }
}

new App();
