import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-decks',
  templateUrl: './user-decks.component.html',
  styleUrls: ['./user-decks.component.scss']
})
export class UserDecksComponent implements OnInit {

  constructor(private _deckService: DeckService,
              private _router: Router) { }

  ngOnInit(): void {
    this.createDeck();
  }

  createDeck(): void {
    this._deckService.getDecks().subscribe((decks: any) => {
      console.log('decks found');
      console.log(decks);
    });
  }

}
