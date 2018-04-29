import { Article } from '../article/article.model';
import { SubredditService } from '../services/subreddit-service.service';
import { AuthService } from '../services/auth-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  subredditWarning: boolean;
  @Input() articles: Article[];

  constructor(private authService: AuthService, private subredditService: SubredditService) {

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

  resetSubreddit(subreddit: HTMLInputElement) {
    subreddit.value = '';
    this.subredditWarning = true;
  }

  ngOnInit() {
  }

}
