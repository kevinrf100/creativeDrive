import { User } from './../../../shared/models/user_model';
import { UserDaoService } from 'src/app/services/dao/user-dao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validateCpf } from 'src/app/Modules/shared/components/inputs/input-cpf/input-cpf.component';
import { validatePasswords } from 'src/app/Modules/shared/Validators/validate-password';

@Component({
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  formUser = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required, validateCpf()]),
    profile: new FormControl(null, [Validators.required]),
    terms: new FormControl(false, [Validators.required]),
  }, validatePasswords);

  profileOptions = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' }
  ];

  constructor(private userDaoService: UserDaoService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.formUser.getRawValue() as User;
    this.userDaoService.createUser(user);
  }

}
