import { SubredditService } from './services/subreddit-service.service';
import { AuthService } from './services/auth-service.service';
import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  subredditWarning: boolean;

  constructor(private authService: AuthService, private subredditService: SubredditService) {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 'doggifs', 3),
      new Article('Fullstack', 'http://fullstack.io', 'peoplefallingdown', 2),
      new Article('Angular Homepage', 'http://angular.io', 'dadjokes', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, subreddit: HTMLInputElement): boolean {
    const isSubreddit = this.subredditService.verifySubreddit(subreddit);

    if (isSubreddit) {
      console.log('IS SUBREDDIT');
      this.subredditWarning = false;
    } else {
      this.resetSubreddit(subreddit);
      return false;
    }

    console.log(`Adding article title: ${title.value} and link: ${link.value} in subreddit: ${subreddit.value}`);
    this.articles.push(new Article(title.value, link.value, subreddit.value, 0));
    title.value = '';
    link.value = '';
    subreddit.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  resetSubreddit(subreddit: HTMLInputElement) {
    subreddit.value = '';
    this.subredditWarning = true;
  }
}
