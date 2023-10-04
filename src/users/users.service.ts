import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly knex: any) {}

  findAll(): Promise<any[]> {
    try {
      return this.knex.select('*').from('users');
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      console.log(error.errors);
    }

    // return this.knex.select('*').from('users');
  }
}
