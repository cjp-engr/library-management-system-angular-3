import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ConfirmedValidator } from 'src/app/shared/validator/confirmed.validator';
import { AdminListService } from 'src/app/shared/services/admin/admin-list.service';
//import { AdminFormService } from 'src/app/shared/services/admin/admin-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private adminListService: AdminListService
    //private adminFormService: AdminFormService
  ) {
    this.form = fb.group(
      {
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'confirm_password'),
      }
    );
  }

  ngOnInit(): void {}

  SignUpUser(
    email: string,
    password: any,
    firstName: string,
    lastName: string,
    userName: string,
    isUserCompletedForm: string
  ) {
    this.authService.SignUp(
      email,
      password,
      firstName,
      lastName,
      userName,
      isUserCompletedForm
    );

    //this.adminFormService.afterClick_refreshEmployeeAdminInfo();
    this.adminListService.afterClick_refreshEmployeeAdminInfo();
  }

  form: FormGroup = new FormGroup({});

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
}
