import { Component, OnInit, ɵConsole } from '@angular/core';
import { AdminFormService, EMPLOYEE_ADMIN_AFTER_REGISTER } from 'src/app/shared/services/admin/admin-form.service';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  employeeAdminAfterRegister: any;

  constructor(public adminFormService: AdminFormService, public adminService: AdminService) { 
    this.employeeAdminAfterRegister = EMPLOYEE_ADMIN_AFTER_REGISTER;
    //console.log('admin-list');
    //console.log(this.employeeAdminAfterRegister);
  }

  ngOnInit(): void {
  }

  populateEmployeeInformationForm(emp_adminID_DBAfterRegister: any, employeeAdminInfo: any){
    //console.log(emp_adminID_DBAfterRegister);
    //console.log(employeeAdminInfo);
    this.adminService.populateEmployeeAdminInformationForm(emp_adminID_DBAfterRegister, employeeAdminInfo);
    
  }

  trylang(){
    this.adminService.trylangKungGumagana();
  }
  

}
