import { User } from './../shared/models/user_model';
import { LoginAuthService } from '../../services/loginAuth/login-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css']
})
export class HomeModuleComponent implements OnInit {

  opened = false;
  userLogged: User;
  firstName: string;

  constructor(
    private loginAuthService: LoginAuthService,
    private route: Router
  ) {
    this.userLogged = JSON.parse(localStorage.getItem('user')) as User;
    this.firstName = this.userLogged.name.split(' ')[0];
  }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.route.navigateByUrl(url);
  }

  logOut() {
    this.loginAuthService.logOut();
  }
}
