import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDataForm: FormGroup;

  constructor(private _auth: AuthenticationService,
    private _router: Router) {}

  ngOnInit(): void {
    this.initLogin();
  }
  initLogin(): void {
    this.userDataForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  loginUser(): void {
    this._auth.loginUser(this.userDataForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/']);

      });
  }

}
