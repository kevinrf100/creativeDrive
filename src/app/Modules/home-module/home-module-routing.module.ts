import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';
import { CanEditUserGuard } from '../../guard/can-edit-user.guard';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModuleComponent } from './home-module.component';

const routes: Routes = [
  {
    path: '',
    component: HomeModuleComponent,
    children: [
      {
        path: 'user', children: [
          {path: 'list', component: UsersListComponent},
          {path: 'edit/:id', component: EditUserComponent, canActivate: [CanEditUserGuard]},
          {path: 'create', component: AddNewUserComponent},
          {path: '**', component: PageNotFoundComponent}
        ]
      },
      {path: '**', component: PageNotFoundComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
