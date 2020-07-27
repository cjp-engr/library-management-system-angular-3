import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  form = new FormGroup({        
    inputImageUrl: new FormControl(''),
    inputDB_ID: new FormControl(''),
    inputFirstName: new FormControl(''),
    inputMiddleName: new FormControl(''),
    inputLastName: new FormControl(''),
    inputUserName: new FormControl(''),
    inputGender: new FormControl(''),
    inputDateOfBirth: new FormControl(''),
    inputMaritalStatus: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputTelephoneNumber: new FormControl(''),
    inputEmail: new FormControl(''),
    inputAddress: new FormControl(''),
    inputPosition: new FormControl(''),
    inputEmployeeNo: new FormControl(''),
    inputHireDate: new FormControl(''),
    inputEmploymentStatus: new FormControl(''),
    inputDepartment: new FormControl(''),
    inputSalary: new FormControl(''),
    inputReportsTo: new FormControl('')
})


}
