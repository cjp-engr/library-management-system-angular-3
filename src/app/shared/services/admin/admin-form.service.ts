import { Injectable } from '@angular/core';
import { IEmployee_Admin_AfterRegister, IEmployee_Admin_CompletedForm } from '../../interface/admin';
import { AngularFirestore } from '@angular/fire/firestore';

export const EMPLOYEE_ADMIN_AFTER_REGISTER: IEmployee_Admin_AfterRegister[] = [];
export const EMPLOYEE_ADMIN_COMPLETED_FORM: IEmployee_Admin_CompletedForm[] = [];

@Injectable({
  providedIn: 'root',
})
export class AdminFormService {
  constructor(private firestore: AngularFirestore) {}

  /* FROM 'user' COLLECTION */
  getEmployee_Admin_AfterRegister() {
    return this.firestore
      .collection('users')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a)=>{
          const employeeAdminAfterRegister: IEmployee_Admin_AfterRegister = {
            emp_adminFirstNameAfterRegister: a.payload.doc.get('firstName'),
            emp_adminLastNameAfterRegister: a.payload.doc.get('lastName'),
            emp_adminEmailAfterRegister: a.payload.doc.get('email'),
            emp_adminUserNameAfterRegister: a.payload.doc.get('displayName'),
            emp_adminID_DBAfterRegister: a.payload.doc.get('uid')
          };
          EMPLOYEE_ADMIN_AFTER_REGISTER.push(employeeAdminAfterRegister);
        })
        //console.log(EMPLOYEE_ADMIN_AFTER_REGISTER);
      });
  }

  afterClick_refreshAdminInfo_AfterRegister(){
    while(EMPLOYEE_ADMIN_AFTER_REGISTER.length != 0){
      EMPLOYEE_ADMIN_AFTER_REGISTER.pop();
    }
  }

  getEmployee_Admin_CompletedForm(){
    return this.firestore
    .collection('employeesAdmin')
    .snapshotChanges()
    .subscribe((res) => {
      res.map((a)=>{
        const employeeAdminCompletedForm: IEmployee_Admin_CompletedForm = {
          employee_adminFirstName: a.payload.doc.get('inputFirstName'),
          employee_adminLastName: a.payload.doc.get('inputLastName'),
          employee_adminEmail: a.payload.doc.get('inputEmail'),
          employee_adminUserName: a.payload.doc.get('inputUserName'),
          employee_adminID_DB: a.payload.doc.get('inputDB_ID'),
          //to be completed by employee/user
          employee_adminMiddleName: a.payload.doc.get('inputMiddleName'),
          employee_adminGender: a.payload.doc.get('inputGender'),
          employee_adminDateOfBirth: a.payload.doc.get('inputDateOfBirth'),
          employee_adminMaritalStatus: a.payload.doc.get('inputMaritalStatus'),
          employee_adminMobileNumber: a.payload.doc.get('inputMobileNumber'),
          employee_adminTelephoneNumber: a.payload.doc.get('inputTelephoneNumber'),
          employee_adminAddress: a.payload.doc.get('inputAddress'),
          employee_adminImage: a.payload.doc.get('inputImageUrl'),
          employee_adminPosition: a.payload.doc.get('inputPosition'),
          employee_adminEmployeeNumber: a.payload.doc.get('inputEmployeeNo'),
          employee_adminHireDate: a.payload.doc.get('inputHireDate'),
          employee_adminEmploymentStatus: a.payload.doc.get('inputEmploymentStatus'),
          employee_adminDepartment: a.payload.doc.get('inputDepartment'),
          employee_adminSalary: a.payload.doc.get('inputSalary'),
          employee_adminReportsTo: a.payload.doc.get('inputReportsTo')

        };
        EMPLOYEE_ADMIN_COMPLETED_FORM.push(employeeAdminCompletedForm);
        
      })
      console.log(EMPLOYEE_ADMIN_COMPLETED_FORM);
    });

  }
}
