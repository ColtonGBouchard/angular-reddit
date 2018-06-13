import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { SubredditService } from '../services/subreddit-service.service';
import { ArticleService } from '../services/article.service';
import { selector } from 'rxjs/operator/publish';
import { AuthService } from '../services/auth-service.service';
import { Article } from '../article/article.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  sortedArticleArray: Article[];

  ngOnInit() {
    console.log('before sort');
    this.sortedArticles();
  }

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private subredditService: SubredditService, private articleService: ArticleService, private http: HttpClient) {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 'doggifs', 3),
      new Article('Fullstack', 'http://fullstack.io', 'peoplefallingdown', 2),
      new Article('Angular Homepage', 'http://angular.io', 'dadjokes', 1),
    ];
  }

  sortedArticles(): void {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:3001').subscribe(response => { console.log(response);
              this.sortedArticleArray = this.articleService.articles.sort((a: Article, b: Article) => b.votes - a.votes ); }, 
            error => console.log(error));
  }
}
