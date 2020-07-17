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
    inputAge: new FormControl(null, Validators.required),
    inputGender: new FormControl('', Validators.required),
    inputStatus: new FormControl('', Validators.required),
    inputEmail: new FormControl('', Validators.required),
    inputMobileNumber: new FormControl(null, Validators.required),
    inputAddress: new FormControl('', Validators.required),
    inputCity: new FormControl('', Validators.required),
    inputState: new FormControl('', Validators.required),
    inputZip: new FormControl(null, Validators.required),
    inputDateAndTimeAdded: new FormControl(formatDate(this.today, 'd MMM yyyy hh:mm:ss a', 'en-US')),
    //memberInformationUpdated: new FormControl(false),
  });

  getMemberInformation(): any {
    return this.firestore.collection('members').snapshotChanges();
  }

  addMemberSubmit() {
    let data = this.form.getRawValue();

    return this.firestore
    .collection('members')
    .add(data).then((e) => {
      console.log(e.id);
      console.log('Hi there');
      })
      .catch((er) => {
      console.log(er.message);
      })

/*     return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('members')
        .add(data)
        .then(
          (err) => {
            //eto po ang naglog ng error
            console.log(data);
            return reject(err);
          }
        );
    }); */
  }

  clearForm() {
    if (this.form.valid) {
      this.form.reset({
        inputFirstName: '',
        inputLastName: '',
        inputAge: null,
        inputGender: '',
        inputStatus: '',
        inputEmail: '',
        inputMobileNumber: null,
        inputAddress: '',
        inputCity: '',
        inputState: '',
        inputZip: null,
        inputDateAndTimeAdded: ''
      });
    }
  }
}
