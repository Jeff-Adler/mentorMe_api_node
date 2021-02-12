// Server imports
import { environmentVars } from './config/index';
import express from 'express';
import { Server } from './api/server';
// Creating server through http module makes it easier to set https server in the future
import { createServer, Server as HttpServer } from 'http';

// Database imports
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

// Startup
(async function main() {
  try {
    console.log('Initializing ORM connection...');
    const connection: Connection = await createConnection();

    // Init express server
    const app: express.Application = new Server().app;
    const server: HttpServer = createServer(app);

    // Start express server
    server.listen(environmentVars.port);

    server.on('listening', () => {
      console.log(`Server is running on port ${environmentVars.port}`);
    });

    server.on('close', () => {
      connection.close();
      console.log(
        `Server is no longer running on port ${environmentVars.port}`
      );
    });
  } catch (err) {
    console.log(err);
  }
})();
