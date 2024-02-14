import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp(signUpDto: any) {
    console.log(signUpDto);
    return signUpDto;
  }
}
