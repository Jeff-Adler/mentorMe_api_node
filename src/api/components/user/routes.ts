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

    //TODO: Implement this route to find User by id. May need to query User without connection.manager
    this.router.get('/:id', this.controller.readUser);
  }
}
