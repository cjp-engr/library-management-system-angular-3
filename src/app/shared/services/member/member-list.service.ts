import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMember } from '../../interface/member';

export const MEMBERINFORMATION: IMember[] = [];


@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(private firestore: AngularFirestore) {}

  getMemberInformation() {
    return this.firestore
      .collection('members')
      .snapshotChanges().subscribe(res => res.map((a)=>{

        const memberInformation: IMember = {
          inputFirstName: a.payload.doc.get('inputFirstName'),
          inputLastName: a.payload.doc.get('inputLastName'),
          inputAge: a.payload.doc.get('inputAge'),
          inputGender: a.payload.doc.get('inputGender'),
          inputStatus: a.payload.doc.get('inputStatus'),
          inputEmail: a.payload.doc.get('inputEmail'),
          inputMobileNumber: a.payload.doc.get('inputMobileNumber'),
          inputAddress: a.payload.doc.get('inputAddress'),
          inputCity: a.payload.doc.get('inputCity'),
          inputState: a.payload.doc.get('inputState'),
          inputZip: a.payload.doc.get('inputZip'),
          inputDateAndTimeAdded: a.payload.doc.get('inputDateAndTimeAdded'),
          memberInfoData: a.payload.doc.data(),
          memberID: a.payload.doc.id
        };

        MEMBERINFORMATION.push(memberInformation);

      }))
     
  }

  afterClick_refreshMemberList(){
    while(MEMBERINFORMATION.length != 0){
      MEMBERINFORMATION.pop();
    }
  }
}
