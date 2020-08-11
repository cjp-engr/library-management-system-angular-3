import { Injectable } from '@angular/core';
import { IMembers2 } from '../../interface/members2';
import { AngularFirestore } from '@angular/fire/firestore';

export const MEMBERS2: IMembers2[] = [];

@Injectable({
  providedIn: 'root'
})
export class Members2ListService {

  constructor(private firestore: AngularFirestore) { }

  getMembers2ListInformation() {
    return this.firestore
      .collection('members2')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a) => {
          const members2List: IMembers2 = {
            members2MemberImage: a.payload.doc.get('inputMemberImage'),
            members2FirstName: a.payload.doc.get('inputFirstName'),
            members2MiddleInitial: a.payload.doc.get('inputMiddleInitial'),
            members2LastName: a.payload.doc.get('inputLastName'),
            members2Age: a.payload.doc.get('inputAge'),
            members2DateOfBirth: a.payload.doc.get('inputDateOfBirth'),
            members2Gender: a.payload.doc.get('inputGender'),
            members2Status: a.payload.doc.get('inputStatus'),
            members2MobileNumber: a.payload.doc.get('inputMobileNumber'),
            members2Email: a.payload.doc.get('inputEmail'),
            members2CurrentAddress: a.payload.doc.get('inputCurrentAddress'),
            members2DateApplied: a.payload.doc.get('inputDateApplied'),
            members2AddedBy: a.payload.doc.get('inputAddedBy'),
            members2MembershipStatus: a.payload.doc.get('inputMembershipStatus'),
            members2InfoData: a.payload.doc.data(),
            members2InfoID: a.payload.doc.id,
          };

          //BOOKS.push(bookList);
          MEMBERS2.push(members2List);
        });
        //console.log(BOOKS.length);
        
      });
      
  }
}
