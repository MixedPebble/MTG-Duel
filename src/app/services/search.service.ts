import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  uri = 'http://localhost:4000'; //Node server
  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.uri}/cards`);
  }
  getCardsByName(cardName: String): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.uri}/cards/${cardName}`);
  }

}
