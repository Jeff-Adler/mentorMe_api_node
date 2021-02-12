import { Router } from 'express';
import { UserRoutes } from './user/routes';

export function registerApiRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}/user`, new UserRoutes().router);
}
