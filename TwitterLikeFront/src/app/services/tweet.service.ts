import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../models/tweet';

@Injectable()
export class TweetService {

  public listTweets: Tweet[];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Tweet[]>(environment.apiUrl + '/api/tweets');
  }
  getByAccountId(id: number) {
    return this.http.get<Tweet[]>(environment.apiUrl + '/api/tweets/' + id);
  }
  create(message: any) {
    return this.http.post<Tweet>(environment.apiUrl + '/api/tweets', message);
  }
}
