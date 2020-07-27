import { Component, OnInit } from '@angular/core';
import { AdminFormService } from 'src/app/shared/services/admin/admin-form.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public adminFormService: AdminFormService) { }

  ngOnInit(): void {
    this.adminFormService.getAdminInformation_AfterRegister();
  }

}
