import { TestBed } from '@angular/core/testing';

import { LatgSideMenuService } from './latg-side-menu.service';

describe('LatgSideMenuService', () => {
  let service: LatgSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatgSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
