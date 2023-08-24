import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import md5 from 'md5';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDTO): Promise<User> {
    const { username, password, bio } = dto;
    // const maybe_user = this.userRepo.findOneBy({ username: username });

    const user = new User();
    user.username = username;
    user.password = password;
    user.bio = bio;

    const error_ = await validate(user);
    if (error_.length > 0) {
      throw new HttpException('Form is incomplete.', HttpStatus.BAD_REQUEST);
    } else {
      return this.userRepo.save(user);
    }
  }

  async getUserByUsername(username: string): Promise<boolean | User> {
    const user = await this.userRepo.findOneBy({ username: username });

    return user;
  }
}
