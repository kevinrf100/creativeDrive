import { User } from '../Modules/shared/models/user_model';
import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditUserGuard implements CanActivate {

  constructor(@Inject(Router) private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem('user')) as User;
    if (user && user.profile === 'admin') {
      return true;
    }
    this.route.navigateByUrl('/home/user/list');
    return false;
  }

}
