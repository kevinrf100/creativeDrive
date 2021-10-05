import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { EditUserComponent } from './Pages/edit-user/edit-user.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
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
          {path: 'edit/:id', component: EditUserComponent},
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
