import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { Card } from '../models/card';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor(
    private _Activatedroute: ActivatedRoute,
    private searchService: SearchService) {
   }

  cardView: String = 'grid';
  ngUnsubscribe = new Subject<void>();
  allCards: Card[];
  ngOnInit(): void {
    this.initialSearch();
    // this.getCardsByName('Air Elemental');
    // this.getUrlParams();
    // this.getAllCards();
  }

  initialSearch(): void {
    this._Activatedroute.paramMap.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((params: ParamMap) => {
      if (params.has('cardName')) {
        this.getCardsByName(params.get('cardName'));
      }
    });
  }

  getCardsByName(cardName: String): void {
    this.searchService.getCardsByName(cardName).pipe(take(1), takeUntil(this.ngUnsubscribe))
    .subscribe((cards: any) => {
      this.allCards = cards;
    });
  }

  getAllCards(): void {
    this.searchService.getCards().pipe(take(1), takeUntil(this.ngUnsubscribe))
    .subscribe((cards: Card[]) => {
      this.allCards = cards;
    });
  }

  switchView(view: string): void {
    this.cardView = view;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getUrlParams(): void {
    this._Activatedroute.paramMap.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((params: ParamMap) => {
      if (params.has('cardName')) {
      }

      // this.id = params.get('id');
    });
}

}
