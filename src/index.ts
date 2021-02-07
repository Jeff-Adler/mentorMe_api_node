// Server imports
import { environmentVars } from './config/index';
import express from 'express';

// Database imports
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './api/components/user/model';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start Express server
app.listen(environmentVars.port, () => {
  console.log(`Server is running on port ${environmentVars.port}`);
});

// Initialize database connection
createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Oak';
    user.lastName = 'Club';
    user.age = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);
  })
  .catch((error) => console.log(error));
