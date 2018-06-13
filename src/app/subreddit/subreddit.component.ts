import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth-service.service';
import { ArticleService } from '../services/article.service';
import { Article } from '../article/article.model';
import { SubredditService } from '../services/subreddit-service.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  subreddit: string;
  articles: Article[] = [ new Article('Angular 2', 'http://angular.io', 'doggifs', 3) ];

  // tslint:disable-next-line:max-line-length
  constructor(private subredditService: SubredditService, private articleService: ArticleService,
              private authService: AuthService, private route: ActivatedRoute, private http: HttpClient) {
      this.route.params.subscribe(params => this.subreddit = params.subreddit);
      this.articles = this.articleService.articles;
   }

  getArticles(): void {
    this.http.get('http://localhost:3001/r/' + this.subreddit).subscribe(response => { console.log(response);
    this.articles = this.articleService.articles.filter(a => a.subreddit === this.subreddit); },
    error => console.log(error));
  }

  displayArticles(): Article[] {
    return this.articles;
  }

  ngOnInit() {
    this.getArticles();
  }
}
