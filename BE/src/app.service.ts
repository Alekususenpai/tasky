import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  
  async getHello(): Promise<string> {
    const response = await this.usersRepository.save({name: 'Jane Doe'})
    return 'Hello'
  }
}
