import { ConfirmEditDialogComponent } from '../../../shared/components/dialogs/confirm-edit-dialog/confirm-edit-dialog.component';
import { UserDaoService } from 'src/app/services/dao/user-dao.service';
import { User } from '../../../shared/models/user_model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { validateCpf } from 'src/app/Modules/shared/components/inputs/input-cpf/input-cpf.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  hide = true;
  formUser: FormGroup;
  user: User;


  profileOptions = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' }
  ];

  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(UserDaoService) private userDaoService: UserDaoService,
    @Inject(MatDialog) public dialog: MatDialog
  ) {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.userDaoService.getUserById(id);
  }

  ngOnInit() {
    this.setForm();
  }

  editUser() {
    const editedUser = this.formUser.getRawValue() as User;
    if (editedUser.password == null) {
      editedUser.password = this.user.password;
    }

    this.dialog.open(ConfirmEditDialogComponent, {
      width: 'fit-content',
      data: editedUser
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.userDaoService.updateUser(editedUser);
      } else {
        this.setForm();
      }
    });
  }

  setForm() {
    this.formUser = new FormGroup({
      id: new FormControl(this.user.id, [Validators.required]),
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(null),
      cpf: new FormControl(this.user.cpf, [Validators.required, validateCpf()]),
      profile: new FormControl(this.user.profile, [Validators.required]),
    });
  }

}
