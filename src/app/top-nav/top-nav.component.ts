import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._auth.isLoggedIn();
  }

  logOut(): void {
    this._auth.logOut();
  }

}
