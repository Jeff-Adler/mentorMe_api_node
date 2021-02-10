import { Repository, getRepository } from 'typeorm';
import { User } from './model';

export class UserService {
  readonly repo: Repository<User> = getRepository(User);

  //TODO: Input query parameters
  public async readAll(): Promise<User[]> {
    try {
      console.log('Loading users from the database...');
      return await this.repo.find({});
    } catch (err) {
      return err;
    }
  }

  public async readUserById(id: number): Promise<User[]> {
    try {
      console.log('Loading users from the database...');
      return await this.repo.find({ where: { id: id } });
    } catch (err) {
      return err;
    }
  }
}
