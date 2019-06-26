import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userDataForm: FormGroup;

  constructor(private _auth: AuthenticationService,
    private _router: Router) { }

  ngOnInit(): void {
    this.initRegistration();
  }

  initRegistration(): void {
    this.userDataForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  registerUser(): void {
    this._auth.registerUser(this.userDataForm.value).subscribe( (res: any) => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/']);
    });
  }
}
