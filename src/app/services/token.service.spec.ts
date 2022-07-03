import { TestBed } from '@angular/core/testing';

import { FormTokenService } from './form-token.service';

describe('FormTokenService', () => {
  let service: FormTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
