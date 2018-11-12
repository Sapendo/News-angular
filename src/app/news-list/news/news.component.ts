import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsContent: string;
  @Input() news: Article;

  constructor() { }

  ngOnInit() {
    if (this.news.content) {
      this.newsContent = this.news.content.replace(/...\s\[.*\]/, '');
    }
  }

}
