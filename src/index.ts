// Initialize database & Start express server

import { environmentVars } from './config/index';
import 'reflect-metadata';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(environmentVars.port, () => {
  console.log(`Server is running on port ${environmentVars.port}`);
});
