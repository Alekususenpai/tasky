import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AppService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getHello(): Promise<string>;
}
