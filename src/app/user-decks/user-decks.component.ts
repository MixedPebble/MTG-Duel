import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-user-decks',
  templateUrl: './user-decks.component.html',
  styleUrls: ['./user-decks.component.scss']
})
export class UserDecksComponent implements OnInit {

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.createDeck();
  }

  createDeck(): void {
    this.deckService.createDeck();
    this.deckService.getDecks().subscribe((decks: any) => {
      console.log('decks found');
      console.log(decks);
    });
  }

}
