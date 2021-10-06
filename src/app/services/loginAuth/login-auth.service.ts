import { Login } from '../../Modules/shared/models/login_models';
import { Injectable } from '@angular/core';
import { UserDaoService } from '../dao/user-dao.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(
    private userDaoService: UserDaoService,
    private route: Router
  ) { }

  logIn(loginInfos: Login): boolean {
    const user = this.userDaoService.findUserByEmailAndPassword(loginInfos);
    if (user) {
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(user));
      this.route.navigateByUrl('/home/user/list');
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
