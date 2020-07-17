import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  today = new Date();

  constructor(private firestore: AngularFirestore) {}
  form = new FormGroup({
    inputFirstName: new FormControl('', Validators.required),
    inputLastName: new FormControl('', Validators.required),
    inputAge: new FormControl('', [
      Validators.pattern('^[0-9]*$'),
      Validators.max(150),
    ]),
    inputGender: new FormControl('', Validators.required),
    inputStatus: new FormControl('', Validators.required),
    inputEmail: new FormControl('', Validators.required),
    inputMobileNumber: new FormControl('', Validators.required),
    inputAddress: new FormControl('', Validators.required),
    inputCity: new FormControl('', Validators.required),
    inputState: new FormControl('', Validators.required),
    inputZip: new FormControl('', [
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(7),
    ]),
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
