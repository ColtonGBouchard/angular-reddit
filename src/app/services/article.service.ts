import { Article } from '../article/article.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  articles = [
      new Article('Angular 2', 'http://angular.io', 'doggifs', 3),
      new Article('Fullstack', 'http://fullstack.io', 'peoplefallingdown', 2),
      new Article('Angular Homepage', 'http://angular.io', 'dadjokes', 1),
  ];

  constructor() { }

  displayArticles(): Article[] {
    return this.articles;
  }
}
