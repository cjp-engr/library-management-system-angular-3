import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private firestore: AngularFirestore) {}

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
    inputReportsTo: new FormControl(''),
    employeeFormCompleted: new FormControl(false),
  });

  async addEmployee_Admin() {
    let data = this.form.getRawValue();

    try {
      const e = await this.firestore.collection('employees').add(data);
      //console.log(e.id);
    } catch (er) {
      console.log(er.message);
    }
    console.log('Done Adding Employee');
  }

  populateEmployeeInformationForm(
    emp_adminID_DBAfterRegister,
    employeeAdminInfo
  ) {
    this.form.setValue({
      inputImageUrl: '',
      inputDB_ID: emp_adminID_DBAfterRegister,
      inputFirstName: '',
      inputMiddleName: '',
      inputLastName: '',
      inputUserName: '',
      inputGender: '',
      inputDateOfBirth: '',
      inputMaritalStatus: '',
      inputMobileNumber: '',
      inputTelephoneNumber: '',
      inputEmail: '',
      inputAddress: '',
      inputPosition: '',
      inputEmployeeNo: '',
      inputHireDate: '',
      inputEmploymentStatus: '',
      inputDepartment: '',
      inputSalary: '',
      inputReportsTo: '',
      employeeFormCompleted: false
    });
  }
}
