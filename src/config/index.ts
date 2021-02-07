import * as dotenv from 'dotenv';
dotenv.config({ path: './src/config/.env' });

export const environmentVars = {
  port: process.env.PORT,
};
