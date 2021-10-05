import { LoginAuthService } from './../services/loginAuth/login-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css']
})
export class HomeModuleComponent implements OnInit {

  opened = false;

  constructor(private loginAuthService: LoginAuthService, private route: Router) { }

  ngOnInit() {
  }

  navigateToUserList() {
    this.route.navigateByUrl('/home/user/list');
  }

  logOut() {
    this.loginAuthService.logOut();
  }
}
