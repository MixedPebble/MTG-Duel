import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  uri = 'http://localhost:4000'; //Node server
  constructor(private http: HttpClient) { }

  getCards() {
    console.log('getCards()');
    return this.http.get(`${this.uri}/cards`);
  }
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }
}
