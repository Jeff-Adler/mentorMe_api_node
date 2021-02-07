import { NextFunction, Request, Response } from 'express';
import { User } from './model';
import { getConnection } from 'typeorm';

export class UserController {
  public async readUsers(): Promise<void> {
    const connection = getConnection();
    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);
  }

  // public async readUsers(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void> {
  //   try {
  //     const users: User[] = await this.userService.readAll({}, true);

  //     return res.json({ status: res.statusCode, data: users });
  //   } catch (err) {
  //     return next(err);
  //   }
  // }
}
