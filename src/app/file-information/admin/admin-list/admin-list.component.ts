import { Component, OnInit, ɵConsole } from '@angular/core';
import {
  AdminFormService,
  EMPLOYEE_ADMIN_AFTER_REGISTER,
  EMPLOYEE_ADMIN_COMPLETED_FORM,
} from 'src/app/shared/services/admin/admin-form.service';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  employeeAdminAfterRegister: any;
  employeeAdminCompletedForm: any;

  constructor(
    public adminFormService: AdminFormService,
    public adminService: AdminService
  ) {
    this.employeeAdminAfterRegister = EMPLOYEE_ADMIN_AFTER_REGISTER;
    this.employeeAdminCompletedForm = EMPLOYEE_ADMIN_COMPLETED_FORM;
    //console.log('admin-list');
    //console.log(this.employeeAdminAfterRegister);
  }

  ngOnInit(): void {}

  populateEmployeeInformationForm_AfterRegister(
    emp_adminID_DBAfterRegister: any,
    employeeAdminInfo: any
  ) {
    //console.log(emp_adminID_DBAfterRegister);
    //console.log(employeeAdminInfo);
    this.adminService.populateEmployeeAdminInformationForm_AfterRegister(
      emp_adminID_DBAfterRegister,
      employeeAdminInfo
    );
  }


}
