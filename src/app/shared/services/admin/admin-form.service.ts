import { Injectable } from '@angular/core';
import { IEmployee_Admin_AfterRegister, IEmployee_Admin_CompletedForm } from '../../interface/admin';
import { AngularFirestore } from '@angular/fire/firestore';

export const EMPLOYEE_ADMIN_AFTER_REGISTER: IEmployee_Admin_AfterRegister[] = [];
export const EMPLOYEE_ADMIN_COMPLETED_FORM: IEmployee_Admin_CompletedForm[] = [];

@Injectable({
  providedIn: 'root',
})
export class AdminFormService {

  isUserCompletedForm: string;

  constructor(private firestore: AngularFirestore) {}

  /* FROM 'user' COLLECTION */
  getEmployee_Admin_AfterRegister() {
    return this.firestore
      .collection('employees')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a)=>{
          
          const employeeAdminAfterRegister: IEmployee_Admin_AfterRegister = {
            emp_adminFirstNameAfterRegister: a.payload.doc.get('firstName'),
            emp_adminLastNameAfterRegister: a.payload.doc.get('lastName'),
            emp_adminEmailAfterRegister: a.payload.doc.get('email'),
            emp_adminUserNameAfterRegister: a.payload.doc.get('displayName'),
            emp_adminID_DBAfterRegister: a.payload.doc.get('uid'),
            emp_adminID_IsUserCompletedForm: a.payload.doc.get('isUserCompletedForm')
            
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

}
