import helmet from 'helmet';
import cors from 'cors';

import { json, Router } from 'express';

export function registerMiddleware(router: Router): void {
  router.use(helmet());

  if (process.env.NODE_ENV === 'development') {
    router.use(cors({ origin: '*' }));
  }

  router.use(json());

  // Setup passport strategies
  // new AuthService().initStrategies();
}
