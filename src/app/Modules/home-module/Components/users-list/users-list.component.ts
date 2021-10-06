import { ConfirmDeleteUserComponent } from './../../../shared/components/dialogs/confirm-delete-user/confirm-delete-user.component';
import { User } from '../../../shared/models/user_model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserDaoService } from 'src/app/services/dao/user-dao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements AfterViewInit {

  user = JSON.parse(localStorage.getItem('user')) as User;
  usersData;
  displayedColumns: string[] = ['name', 'email', 'cpf', 'profile'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private userDaoService: UserDaoService,
    private route: Router,
    public dialog: MatDialog
  ) {
    this.usersData = new MatTableDataSource<User>(this.userDaoService.getUserList());
    if (this.user && this.user.profile === 'admin') {
      this.displayedColumns.push('actions');
    }
  }

  ngAfterViewInit() {
    this.usersData.paginator = this.paginator;
    this.usersData.sort = this.sort;
  }

  editUser(user: User) {
    this.route.navigateByUrl('home/user/edit/' + user.id);
  }

  delete(user: User) {
    this.dialog.open(ConfirmDeleteUserComponent, {
      width: 'fit-content',
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        if (this.userDaoService.removeUser(user)) {
          this.usersData = new MatTableDataSource<User>(this.userDaoService.getUserList());
        }
      }
    });
  }

  addNewUser() {
    this.route.navigateByUrl('/home/user/create');
  }

}
