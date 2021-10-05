import { ErrorSnackBarMessageComponent } from '../../shared/components/snackBar/error-snack-bar-message/error-snack-bar-message.component';
import { User } from './../../shared/models/user_model';
import { Login } from './../../shared/models/login_models';
import { User } from '../../shared/models/user_model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  private usersList: Array<User> = [
    {
      id: 1,
      name: 'kevin',
      email: 'kevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 2,
      name: 'bevin',
      email: 'tevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 3,
      name: 'cevin',
      email: 'cevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 4,
      name: 'tevin',
      email: 'devinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 5,
      name: 'qevin',
      email: 'hevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 6,
      name: 'aevin',
      email: 'qevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 7,
      name: 'tevin',
      email: 'bevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 8,
      name: 'hevin',
      email: 'xevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 9,
      name: 'jevin',
      email: 'zevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 10,
      name: 'levin',
      email: 'pevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 11,
      name: 'yevin',
      email: 'hevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 12,
      name: 'qevin',
      email: 'levinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    },
    {
      id: 13,
      name: 'nevin',
      email: 'wevinrf100@gmail.com.br',
      password: '123',
      cpf: '123456789123',
      profile: 'admin'
    }
  ];

  constructor(private snackBar: MatSnackBar) { }

  updateUser(newUser: User) {
    const oldUser = this.getUserById(newUser.id);
    const index = this.usersList.indexOf(oldUser);

    this.usersList[index] = newUser;
  }

  createUser(user: User) {
    if (this.validateUniqueEmail(user.email)) {
      user.id = this.usersList.length;
      this.usersList.push(user);
    } else {
      this.snackBar.openFromComponent(ErrorSnackBarMessageComponent, {duration: 2000, data: 'Email is already registered!'});
    }
  }

  removeUser(user: User) {
    const index: number = this.usersList.indexOf(user);
    if (index >= 0) {
      this.usersList = this.usersList.splice(index, 1);
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
