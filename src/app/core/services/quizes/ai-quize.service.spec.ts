import { TestBed } from '@angular/core/testing';

import { AiQuizeService } from './ai-quize.service';

describe('AiQuizeService', () => {
  let service: AiQuizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiQuizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
