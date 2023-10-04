import { Module } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import Knex from 'knex';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const knex = Knex({
          client: 'mysql2',
          connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: 3306,
          },
        });
        return knex;
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
configDotenv();
