import { NextFunction, Request, Response } from 'express';
import { User } from './model';

export class UserController {
  public readUsers() {
    console.log('Loading users:');
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
