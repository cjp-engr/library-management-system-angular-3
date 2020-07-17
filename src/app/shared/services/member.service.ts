import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  today = new Date();

  constructor(private firestore: AngularFirestore) {}
  form = new FormGroup({
    inputFirstName: new FormControl(''),
    inputLastName: new FormControl(''),
    inputAge: new FormControl(''),
    inputGender: new FormControl(''),
    inputStatus: new FormControl(''),
    inputEmail: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputAddress: new FormControl(''),
    inputCity: new FormControl(''),
    inputState: new FormControl(''),
    inputZip: new FormControl(''),
    inputDateAndTimeAdded: new FormControl(
      formatDate(this.today, 'd MMM yyyy hh:mm:ss a', 'en-US')
    ),
    completed: new FormControl(false),
  });

  getMemberInformation(): any {
    return this.firestore.collection('members').snapshotChanges();
  }

  addMemberSubmit() {
    let data = this.form.value;
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('members')
        .add(data)
        .then(
          () => {
            this.clearForm();
          },
          (err) => reject(err)
        );
    });
  }

  clearForm() {
    if (this.form.valid) {
      this.form.reset({
        inputFirstName: '',
        inputLastName: '',
        inputAge: '',
        inputGender: '',
        inputStatus: '',
        inputEmail: '',
        inputMobileNumber: '',
        inputAddress: '',
        inputCity: '',
        inputState: '',
        inputZip: '',
      });
    }
  }
}
