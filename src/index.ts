// Server imports
import { environmentVars } from './config/index';
import express from 'express';
import { Server } from './api/server';
// Creating server through http module makes it easier to set https server in the future
import { createServer, Server as HttpServer } from 'http';

// Database imports
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { User } from './api/components/user/model';

import * as faker from 'faker';

// Startup
(async function main() {
  try {
    console.log('Initializing ORM connection...');
    const connection: Connection = await createConnection();

    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.age = Math.floor(Math.random() * 90 + 18);
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

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

// const app = express();

// // Start Express server
// app.listen(environmentVars.port, () => {
//   console.log(`Server is running on port ${environmentVars.port}`);
// });

// // Initialize database connection
// createConnection()
//   .then(async (connection) => {
//     // console.log('Inserting a new user into the database...');
//     // const user = new User();
//     // user.firstName = 'Oak';
//     // user.lastName = 'Club';
//     // user.age = 25;
//     // await connection.manager.save(user);
//     // console.log('Saved a new user with id: ' + user.id);

//     console.log('Loading users from the database...');
//     const users = await connection.manager.find(User);
//     console.log('Loaded users: ', users);
//   })
//   .catch((error) => console.log(error));

// Note: to access table in postgres CLI, SELECT * FROM public.user;
