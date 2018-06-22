import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth-service.service';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private authService: AuthService, private http: HttpClient) {
   }

   voteUp(): boolean {
    this.http.post('http://localhost:3001/update-score', {'up': 1, 'title': this.article.title})
    .subscribe(response => console.log(response), error => console.log(error));

     this.article.voteUp();
     return false;
   }

   voteDown(): boolean {
    this.http.post('http://localhost:3001/update-score', {'down': 1})
    .subscribe(response => console.log(response), error => console.log(error));

     this.article.voteDown();
     return false;
   }

  ngOnInit() {
  }

}
