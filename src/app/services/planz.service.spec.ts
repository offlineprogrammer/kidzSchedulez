import { TestBed } from '@angular/core/testing';

import { PlanzService } from './planz.service';

describe('PlanzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanzService = TestBed.get(PlanzService);
    expect(service).toBeTruthy();
  });
});
