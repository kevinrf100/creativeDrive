import { TestBed, async, inject } from '@angular/core/testing';

import { CanEditUserGuard } from './can-edit-user.guard';

describe('CanEditUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEditUserGuard]
    });
  });

  it('should ...', inject([CanEditUserGuard], (guard: CanEditUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
