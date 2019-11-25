import { TestBed } from '@angular/core/testing';

import { NgxSwitchService } from './ngx-switch.service';

describe('NgxSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSwitchService = TestBed.get(NgxSwitchService);
    expect(service).toBeTruthy();
  });
});
