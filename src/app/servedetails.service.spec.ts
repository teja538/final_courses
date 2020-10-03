import { TestBed } from '@angular/core/testing';

import { ServedetailsService } from './servedetails.service';

describe('ServedetailsService', () => {
  let service: ServedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
