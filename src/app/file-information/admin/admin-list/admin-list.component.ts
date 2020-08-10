import { Component, OnInit } from '@angular/core';
//import {AdminFormService, EMPLOYEE_ADMIN} from 'src/app/shared/services/admin/admin-form.service';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';
import { AdminListService, EMPLOYEE_ADMIN } from 'src/app/shared/services/admin/admin-list.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  employeeSearch: any;

  employeeAdmin = EMPLOYEE_ADMIN;

  constructor(
    //public adminFormService: AdminFormService,
    public adminListService: AdminListService,
    public adminService: AdminService,
    public router: Router
  ) {
    //this.employeeAdmin = EMPLOYEE_ADMIN;

    //console.log('admin-list');
    //console.log(this.employeeAdminAfterRegister);
  }

  ngOnInit(): void {
    this.getEmployeeAdmin();
  }

  collection = { count: EMPLOYEE_ADMIN.length };
  config = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: this.collection.count
  };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  onPageChange(event: any){
    console.log(event);
    this.config.currentPage = event;
  }

  getEmployeeAdmin(){
    this.adminListService.afterClick_refreshEmployeeAdminInfo();
    this.adminListService.getEmployeeAdmin();
  }

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
    //this.adminFormService.afterClick_refreshEmployeeAdminInfo();
    this.adminListService.afterClick_refreshEmployeeAdminInfo();

    if(!this.adminService.employeeAdminImageUpdated){
      //this.adminFormService.getEmployeeAdmin();
      this.adminListService.getEmployeeAdmin();
    }
    
    console.log('Done Employee Info Update!');
    this.adminService.clearEmployeeAdminResetValues();
  }

}
