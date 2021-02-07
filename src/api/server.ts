// import middleware / component routes
// insert error handling

import express from 'express';

import { initRoutes } from './routes';

export class Server {
  private readonly _app: express.Application = express();

  public constructor() {
    // app conforms to interface Router, which initRouters implements
    initRoutes(this._app);
  }

  public get app(): express.Application {
    return this._app;
  }
}
