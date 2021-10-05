import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './Pages/edit-user/edit-user.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HomeModuleComponent,
    EditUserComponent,
    UsersListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    SharedModule
  ]
})
export class HomeModuleModule { }
