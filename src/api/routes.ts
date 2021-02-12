//register all component and middleware routes
import { Router } from 'express';
import { registerMiddleware } from './middleware';
import { registerApiRoutes } from './components';

/**
 * Init Express api routes (Global)
 *
 * @param router Router the routes are attached to
 * @param prefix Prefix for attached routes
 * @returns
 */

export function initRoutes(router: Router, prefix: string = ''): void {
  registerMiddleware(router);
  registerApiRoutes(router);

  router.get('/', () => console.log('Hello World'));
}
