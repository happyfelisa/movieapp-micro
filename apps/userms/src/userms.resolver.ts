import {
  Resolver,
  ResolveReference,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { UsermsService } from './userms.service';
import { UserType } from './entities/UserType';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/userm.entity';
import { LoginInput } from './dto/login.input';

@Resolver(() => User)
export class UsermsResolver {
  constructor(private readonly usermsService: UsermsService) {}

  @Mutation(() => UserType)
  createUserm(@Args('createUsermInput') createUserInput: CreateUserInput) {
    return this.usermsService.create(createUserInput);
  }

  @Query(() => [UserType], { name: 'userms' })
  findAll() {
    return this.usermsService.findAll();
  }

  @Query(() => UserType, { name: 'userm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usermsService.findOne(id);
  }

  @Query(() => UserType, { name: 'login' })
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.usermsService.login(loginInput);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.usermsService.findOne(reference.id);
  }
}
