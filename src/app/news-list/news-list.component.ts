import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../interfaces/article';
import { Request } from '../interfaces/request';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: Article[] = [];
  subscription: Subscription;

  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getRequest('country=ua');
    this.subscription = this.newsService.getNews().subscribe( (result: Request) => [this.newsList = result['articles']]);
  }
}
