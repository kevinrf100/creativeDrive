import { Login } from './../../shared/models/login_models';
import { LoginAuthService } from './../../services/loginAuth/login-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  credentialsError = false;

  constructor(
    private route: Router,
    private loginAuthService: LoginAuthService,
  ) { }

  ngOnInit() {
  }

  logIn() {
    this.credentialsError = this.loginAuthService.logIn(this.formLogin.getRawValue() as Login);
  }

  singUp() {
    this.route.navigateByUrl('/signUp');
  }

}
