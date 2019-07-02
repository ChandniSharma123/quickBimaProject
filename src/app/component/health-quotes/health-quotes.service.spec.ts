import { TestBed } from '@angular/core/testing';

import { HealthQuotesService } from './health-quotes.service';

describe('HealthQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthQuotesService = TestBed.get(HealthQuotesService);
    expect(service).toBeTruthy();
  });
});
