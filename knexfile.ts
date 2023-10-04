import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/migrations', // Create this directory
  },
};

export default config;
