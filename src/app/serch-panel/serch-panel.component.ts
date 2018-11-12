import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-serch-panel',
  templateUrl: './serch-panel.component.html',
  styleUrls: ['./serch-panel.component.css']
})
export class SerchPanelComponent {
  public radioButtons = [
    'Sources',
    'Countries'
  ];
  public isShow = true;

  public countries = [
    {
      name: 'Canada ',
      abbr: 'ca'
    },
    {
      name: 'Italy',
      abbr: 'it'
    },
    {
      name: 'Poland',
      abbr: 'pl'
    },
    {
      name: 'Russia',
      abbr: 'ru'
    },
    {
      name: 'Ukraine',
      abbr: 'ua'
    },
    {
      name: 'United Kingdom',
      abbr: 'gb'
    },
    {
      name: 'United States',
      abbr: 'us'
    }
  ];

  public categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  public sources = [
    {
      name: 'ABC News',
      abbr: 'abc-news'
    },
    {
      name: 'BBC News',
      abbr: 'bbc-news'
    },
    {
      name: 'BBC Sport',
      abbr: 'bbc-sport'
    },
    {
      name: 'Bloomberg',
      abbr: 'bloomberg'
    },
    {
      name: 'CNN',
      abbr: 'cnn'
    },
    {
      name: 'La Repubblica',
      abbr: 'la-repubblica'
    },
    {
      name: 'MTV News',
      abbr: 'mtv-news'
    },
    {
      name: 'National Geographic',
      abbr: 'national-geographic'
    },
    {
      name: 'NBC News',
      abbr: 'nbc-news'
    },
    {
      name: 'News24',
      abbr: 'news24'
    },
    {
      name: 'New Scientist',
      abbr: 'new-scientist'
    },
    {
      name: 'Reddit',
      abbr: 'reddit-r-all'
    },
    {
      name: 'The New York Times',
      abbr: 'the-new-york-times'
    }
  ];
  @ViewChild('news') news: ElementRef;
  constructor(private newsService: NewsService) {

  }

  onClick(name) {
    this.isShow = name === 'Countries';
  }
  sendRequest(form: NgForm) {
    let request = '';
    for (const key in form) {
      if (form[key]) {
        request += `${key}=${form[key]}&`;
      }
    }
    this.newsService.getRequest(request.slice(0, -1));
  }
}
