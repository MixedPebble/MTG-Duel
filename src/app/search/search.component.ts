import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor(private _Activatedroute: ActivatedRoute) {
   }
  ngUnsubscribe = new Subject<void>();
  id: string;

  ngOnInit(): void {
    this._Activatedroute.paramMap.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(params => {
      this.id = params.get('id');
    });

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }





}
