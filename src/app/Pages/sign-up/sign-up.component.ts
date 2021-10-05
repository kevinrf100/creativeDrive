import { User } from './../../shared/models/user_model';
import { UserDaoService } from '../../services/dao/user-dao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { group } from 'console';
import { validateCpf } from '../../shared/components/inputs/input-cpf/input-cpf.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;
  formUser = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required, validateCpf()]),
    profile: new FormControl(null, [Validators.required]),
    terms: new FormControl(false, [Validators.required]),
  }, this.validatePasswords);

  profileOptions = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' }
  ];

  constructor(
    private userDaoService: UserDaoService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  validatePasswords(form: AbstractControl): ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password.value != null && confirmPassword.value != null) {
      password.value === confirmPassword.value ? confirmPassword.setErrors(null) : confirmPassword.setErrors({ wrongPassword: true });
    }
    return null;
  }

  onSubmit() {
    const user = this.formUser.getRawValue() as User;
    this.userDaoService.createUser(user);
  }

}
