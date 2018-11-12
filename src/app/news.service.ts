import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private request = new Subject();
  private baseURL = 'https://newsapi.org/v2/top-headlines';
  private headers = new HttpHeaders({
    'X-Api-Key': '400d3dff4d4e4274aa2000efe212584a'
  });

  constructor( private http: HttpClient ) { }

  getNews() {
    return this.request;
  }

  async getRequest(request) {
    await this.http.get(`${this.baseURL}?${request}`, {headers: this.headers})
      .subscribe( w => this.request.next(w));
  }
}
