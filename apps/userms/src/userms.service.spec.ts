import { Test, TestingModule } from '@nestjs/testing';
import { UsermsService } from './userms.service';

describe('UsermsService', () => {
  let service: UsermsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsermsService],
    }).compile();

    service = module.get<UsermsService>(UsermsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
