import { Component, OnInit } from '@angular/core';
import {
  AdminFormService,
  EMPLOYEE_ADMIN
} from 'src/app/shared/services/admin/admin-form.service';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  employeeAdmin: any;

  constructor(
    public adminFormService: AdminFormService,
    public adminService: AdminService,
    public router: Router
  ) {
    this.employeeAdmin = EMPLOYEE_ADMIN;
    //console.log('admin-list');
    //console.log(this.employeeAdminAfterRegister);
  }

  ngOnInit(): void {}

  populateEmployeeInformationForm(
    emp_adminID_DB: any,
    employeeAdminInfo: any
  ) {
    //console.log(emp_adminID_DBAfterRegister);
    //console.log(employeeAdminInfo);
    this.adminService.populateEmployeeAdminInformationForm(
      emp_adminID_DB,
      employeeAdminInfo
    );
  }

  updateEmployeeAdminInformation(){
    this.adminService.updateEmployeeAdminInformation();
    this.adminService.updateEmployeeAdminImage();
    this.adminFormService.afterClick_refreshEmployeeAdminInfo();

    if(!this.adminService.employeeAdminImageUpdated){
      this.adminFormService.getEmployeeAdmin();
    }
    
    console.log('Done Employee Info Update!');
    this.adminService.clearEmployeeAdminResetValues();
  }

}
