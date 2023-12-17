import { TestBed } from '@angular/core/testing';

import { NoteservService } from './noteserv.service';

describe('NoteservService', () => {
  let service: NoteservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
