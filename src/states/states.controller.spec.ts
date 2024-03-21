import { Test, TestingModule } from '@nestjs/testing';
import { StatesController } from './states.controller';
import { statesService } from './states.service';

describe('StatesController', () => {
  let controller: StatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatesController],
      providers: [statesService],
    }).compile();

    controller = module.get<StatesController>(StatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
