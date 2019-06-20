import { TestBed } from '@angular/core/testing';

import { KoskaCommonService } from './koska-common.service';

describe('KoskaCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoskaCommonService = TestBed.get(KoskaCommonService);
    expect(service).toBeTruthy();
  });
});
