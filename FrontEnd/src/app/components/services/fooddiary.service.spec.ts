import { TestBed } from '@angular/core/testing';

import { FooddiaryService } from './fooddiary.service';

describe('FooddiaryService', () => {
  let service: FooddiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooddiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
