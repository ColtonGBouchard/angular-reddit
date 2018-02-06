import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth-service.service';

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
