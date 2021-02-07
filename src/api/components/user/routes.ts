import { Router } from 'express';
import { UserController } from './controller';

export class UserRoutes {
  readonly router: Router = Router();
  readonly controller: UserController = new UserController();

  public constructor() {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.controller.readUsers);
  }
}
