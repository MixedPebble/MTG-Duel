import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
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
  ngUnsubscribe = new Subject<void>();
  id: string;
  // https://alligator.io/angular/component-inheritance/
  ngOnInit(): void {
    // this.getUrlParams();
    // this.getCards();

    this.searchService.getCards().subscribe((card) => {
      console.log('card');
      console.log(card);
    });

  }

  getUrlParams(): void {
    this._Activatedroute.paramMap.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(params => {
      this.id = params.get('id');
    });
  }

  getCards(): void {
    console.log('fetching cards');
    this.searchService.getCards().subscribe(card => {
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }





}
