//register all component and middleware routes
import { Router } from 'express';
import { UserRoutes } from './components/user/routes';

/**
 * Init Express api routes (Global)
 *
 * @param router Router the routes are attached to
 * @param prefix Prefix for attached routes
 * @returns
 */

export function initRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}/users`, new UserRoutes().router);

  router.get('/', () => console.log('Hello World'));
}
