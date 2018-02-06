import { SubredditService } from './services/subreddit-service.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        ArticleComponent
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        AuthService,
        SubredditService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
