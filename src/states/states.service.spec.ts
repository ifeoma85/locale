import { Test, TestingModule } from '@nestjs/testing';
import { statesService } from './states.service';

describe('StatesService', () => {
  let service: statesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [statesService],
    }).compile();

    service = module.get<statesService>(statesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
