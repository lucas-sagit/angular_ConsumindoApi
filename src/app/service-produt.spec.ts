import { TestBed } from '@angular/core/testing';

import { ServiceProdut } from './service-produt';

describe('ServiceProdut', () => {
  let service: ServiceProdut;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProdut);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
