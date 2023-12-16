import { TestBed } from '@angular/core/testing';

import { AnnoncesSerService } from './annonces-ser.service';

describe('AnnoncesSerService', () => {
  let service: AnnoncesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoncesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
