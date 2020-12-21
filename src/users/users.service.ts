import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  // fixme : 실제 서비스에서는 DB 와 연동하여 User 를 조회해오도록 합니다.
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
