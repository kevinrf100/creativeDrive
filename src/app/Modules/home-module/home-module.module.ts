import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';


@NgModule({
  declarations: [
    HomeModuleComponent,
    EditUserComponent,
    UsersListComponent,
    PageNotFoundComponent,
    AddNewUserComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    SharedModule
  ]
})
export class HomeModuleModule { }
