import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/userm.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsermsService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    this.users.save(createUserInput);
    return createUserInput;
  }

  async findAll() {
    return await this.users.find();
  }

  async findOne(id: number) {
    console.log(await this.users.findOne({ where: { id } }));
    return this.users.findOne({ where: { id } });
  }
}
