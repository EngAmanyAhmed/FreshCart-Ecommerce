import { TestBed } from '@angular/core/testing';

import { CategoriService } from './categori.service';

describe('CategoriService', () => {
  let service: CategoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
