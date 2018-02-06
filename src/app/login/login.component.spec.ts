import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms/src/directives';
import { AuthService } from '../services/auth-service.service';
import { HttpModule } from '@angular/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login',
  inject ([AuthService], ((authService: AuthService)  => {
    spyOn(authService, 'login').and.returnValue(Observable.of(Boolean));
    const testForm = <NgForm>{
      value: {
        name: 'test',
        category: 'test'
      }
    };
    component.login(testForm);
    expect(authService.login).toHaveBeenCalled();
  })));

  it('should logout',
  inject([AuthService], ((authService: AuthService) => {
    spyOn(authService, 'logout');
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
  })));
});
