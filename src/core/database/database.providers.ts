import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      return new Sequelize({
        username: databaseConfig.username,
        password: databaseConfig.password,
        database: databaseConfig.database,
        host: databaseConfig.host,
        port: databaseConfig.port,
        dialect: databaseConfig.dialect,
      });
    },
  },
];
