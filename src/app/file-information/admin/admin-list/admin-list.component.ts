import { Component, OnInit, ɵConsole } from '@angular/core';
import {
  AdminFormService,
  EMPLOYEE_ADMIN
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
  employeeAdmin

  constructor(
    public adminFormService: AdminFormService,
    public adminService: AdminService
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
  }


}
