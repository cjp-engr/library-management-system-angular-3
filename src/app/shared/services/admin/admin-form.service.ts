import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { IEmployee_Admin } from '../../interface/admin';

export const EMPLOYEE_ADMIN: IEmployee_Admin[] = [];

@Injectable({
  providedIn: 'root',
})
export class AdminFormService {
  isUserCompletedForm: string;

  constructor(private firestore: AngularFirestore) {}

  /* FROM 'user' COLLECTION */
  getEmployeeAdmin() {
    return this.firestore
      .collection('employees')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a) => {

          const employeeAdminAfterRegister: IEmployee_Admin = {
            //user info saved after registration
            employee_adminFirstName: a.payload.doc.get('firstName'),
            employee_adminLastName: a.payload.doc.get('lastName'),
            employee_adminEmail: a.payload.doc.get('email'),
            employee_adminUserName: a.payload.doc.get('displayName'),
            employee_adminID_DB: a.payload.doc.get('uid'),
            employee_adminUID: a.payload.doc.get('uid'),
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
            employee_adminBranch: a.payload.doc.get('inputBranch'),
            employee_adminSalary: a.payload.doc.get('inputSalary'),
            employee_adminReportsTo: a.payload.doc.get('inputReportsTo'),
          };
          EMPLOYEE_ADMIN.push(employeeAdminAfterRegister);
        });
        //console.log(EMPLOYEE_ADMIN_AFTER_REGISTER);
      });
  }

  afterClick_refreshEmployeeAdminInfo() {
    while (EMPLOYEE_ADMIN.length != 0) {
      EMPLOYEE_ADMIN.pop();
    }
  }

}
