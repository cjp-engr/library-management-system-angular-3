import { Component, OnInit } from '@angular/core';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/shared/services/admin/admin.service';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  inputDateOfBirthModel: NgbDateStruct;
  inputHireDateModel: NgbDateStruct;

  constructor(public adminService: AdminService) {}
   
  ngOnInit(): void {
  }

  saveEmployeeAdminImage(){
    this.adminService.saveEmployeeAdminImage();
    
  }

  setValueEmployeeAdminImageUrl():string{
    return this.adminService.employeeAdminImageUrl;
  }

  uploadImage(event: any){
    this.adminService.uploadImage(event);
  }

  newUploadImageUrl(){
    if(this.adminService.employeeAdminHasImage){
      return this.adminService.displayEmployeeAdminUploadedImage;
    }else{
      return this.adminService.newUploadImageUrl;
    }
    
  }

}
