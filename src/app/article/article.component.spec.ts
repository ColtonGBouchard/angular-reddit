import { Article } from './article.model';
import { ConnectionBackend, Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthService } from '../services/auth-service.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [HttpModule],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = new Article('test', 'test', 'test', 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should vote up', () => {
    component.article = new Article('test', 'test', 'test', 0);
    component.voteUp();
    expect(component.article.votes).toBe(1);
  });

  it('should vote down', () => {
    component.article = new Article('test', 'test', 'test', 0);
    component.voteDown();
    expect(component.article.votes).toBe(-1);
  });
});
