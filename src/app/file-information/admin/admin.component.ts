import { Component, OnInit } from '@angular/core';
import { AdminListService } from 'src/app/shared/services/admin/admin-list.service';
//import { AdminFormService } from 'src/app/shared/services/admin/admin-form.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
              //public adminFormService: AdminFormService,
              public adminListService: AdminListService
              ) { }

  ngOnInit(): void {
    //this.adminFormService.afterClick_refreshEmployeeAdminInfo();
    //this.adminFormService.getEmployeeAdmin();
    this.adminListService.afterClick_refreshEmployeeAdminInfo();
    this.adminListService.getEmployeeAdmin();
  }

}
