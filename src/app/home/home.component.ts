import { SubredditService } from '../services/subreddit-service.service';
import { ArticleService } from '../services/article.service';
import { selector } from 'rxjs/operator/publish';
import { AuthService } from '../services/auth-service.service';
import { Article } from '../article/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[];

  constructor(private authService: AuthService, private subredditService: SubredditService, private articleService: ArticleService) {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 'doggifs', 3),
      new Article('Fullstack', 'http://fullstack.io', 'peoplefallingdown', 2),
      new Article('Angular Homepage', 'http://angular.io', 'dadjokes', 1),
    ];
  }

  sortedArticles(): Article[] {
    return this.articleService.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
