import { getConnection } from 'typeorm';
import { User } from './model';

export class UserService {
  //TODO: Input query parameters
  public async readAll() {
    const connection = getConnection();
    console.log('Loading users from the database...');
    return await connection.manager.find(User);
  }
}
