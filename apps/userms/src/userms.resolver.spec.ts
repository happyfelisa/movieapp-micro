import { Test, TestingModule } from '@nestjs/testing';
import { UsermsResolver } from './userms.resolver';
import { UsermsService } from './userms.service';

describe('UsermsResolver', () => {
  let resolver: UsermsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsermsResolver, UsermsService],
    }).compile();

    resolver = module.get<UsermsResolver>(UsermsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
