import * as dotenv from 'dotenv';
import * as process from 'process';
import { Dialect } from 'sequelize/types/sequelize';

dotenv.config();

export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  dialect?: Dialect;
}

export const databaseConfig: IDatabaseConfigAttributes = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  dialect: 'mysql',
};
