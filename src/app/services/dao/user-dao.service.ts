import {
  SuccessSnackBarMessageComponent
} from './../../Modules/shared/components/snackBar/success-snack-bar-message/success-snack-bar-message.component';
import {
  ErrorSnackBarMessageComponent
} from '../../Modules/shared/components/snackBar/error-snack-bar-message/error-snack-bar-message.component';
import { Login } from '../../Modules/shared/models/login_models';
import { User } from '../../Modules/shared/models/user_model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  private usersList: Array<User> = [];

  constructor(private snackBar: MatSnackBar, private route: Router) { }

  updateUser(newUser: User) {
    const oldUser = this.getUserById(newUser.id);
    const index = this.usersList.indexOf(oldUser);

    this.usersList[index] = newUser;
  }

  createUser(user: User): boolean {
    if (this.validateUniqueEmail(user.email)) {
      user.id = this.usersList.length;
      this.usersList.push(user);
      this.snackBar.openFromComponent(SuccessSnackBarMessageComponent, { duration: 2000, data: 'User created successfully!' });
      return true;
    } else {
      this.snackBar.openFromComponent(ErrorSnackBarMessageComponent, { duration: 2000, data: 'Email is already registered!' });
      return false;
    }
  }

  removeUser(user: User): boolean {
    const index: number = this.usersList.indexOf(user);
    if (index >= 0 && this.usersList.length > 1) {
      this.usersList = this.usersList.splice(index - 1, 1);
      this.snackBar.openFromComponent(SuccessSnackBarMessageComponent, { duration: 2000, data: 'User has been removed!' });
      return true;
    } else if (this.usersList.length === 1) {
      this.usersList.pop();
      this.snackBar.openFromComponent(SuccessSnackBarMessageComponent, { duration: 2000, data: 'User has been removed!' });
      return true;
    } else {
      return false;
    }
  }

  getUserList(): Array<User> {
    return [...this.usersList];
  }

  findUserByEmailAndPassword(loginInfos: Login): User | null {
    let user = null;
    this.usersList.forEach(element => {
      if (element.email === loginInfos.email && element.password === loginInfos.password) {
        user = element;
      }
    });
    return user;
  }

  getUserById(id: number): User {
    let user = null;
    this.usersList.forEach(element => {
      if (element.id === id) {
        user = element;
      }
    });
    return user;
  }

  validateUniqueEmail(email: string): boolean {
    this.usersList.forEach(element => {
      if (element.email === email) {
        return false;
      }
    });
    return true;
  }
}
