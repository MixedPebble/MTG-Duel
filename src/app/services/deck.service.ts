import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getDecks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.uri}/decks`);

  }

  createDeck(): void {
    console.log('createDeck()');
  }
}
