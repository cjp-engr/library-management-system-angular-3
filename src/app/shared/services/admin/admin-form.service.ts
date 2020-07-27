import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IAdmin_AfterRegister } from '../../interface/admin';

export const ADMIN_AFTER_REGISTER: IAdmin_AfterRegister[] = [];

@Injectable({
  providedIn: 'root',
})
export class AdminFormService {
  constructor(private firestore: AngularFirestore) {}

  getAdminInformation_AfterRegister() {
    return this.firestore
      .collection('users')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a)=>{
          const adminAfterRegister: IAdmin_AfterRegister = {
            adminFirstName: a.payload.doc.get('firstName'),
            adminLastName: a.payload.doc.get('lastName'),
            adminEmail: a.payload.doc.get('email'),
            adminUserName: a.payload.doc.get('displayName'),
            adminID_DB: a.payload.doc.get('uid')
          }
          ADMIN_AFTER_REGISTER.push(adminAfterRegister);
        })
        
        console.log(ADMIN_AFTER_REGISTER.length);
        console.log(ADMIN_AFTER_REGISTER);
      });
  }

  afterClick_refreshAdminInfo_AfterRegister(){
    while(ADMIN_AFTER_REGISTER.length != 0){
      ADMIN_AFTER_REGISTER.pop();
    }
  }
}
