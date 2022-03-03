import { TestBed } from '@angular/core/testing';

import { LoggedinauthGuard } from './loggedinauth.guard';

describe('LoggedinauthGuard', () => {
  let guard: LoggedinauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedinauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
