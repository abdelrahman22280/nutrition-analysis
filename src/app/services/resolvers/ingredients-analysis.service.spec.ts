import { TestBed } from '@angular/core/testing';

import { IngredientsAnalysisService } from './ingredients-analysis.service';

describe('IngredientsAnalysisService', () => {
  let service: IngredientsAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
