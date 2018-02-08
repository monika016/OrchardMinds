import { TestBed, inject } from '@angular/core/testing';

import { OrchardDataService } from './orchard-data.service';

describe('OrchardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrchardDataService]
    });
  });

  it('should be created', inject([OrchardDataService], (service: OrchardDataService) => {
    expect(service).toBeTruthy();
  }));
});
