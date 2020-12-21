import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    // fixme : 실제 서비스에서는 password 를 이렇게 단순비교하는 것이 아니라 bcrypt 등의 암호화 기법을 적용해야 안전합니다.
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
