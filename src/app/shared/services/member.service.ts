import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MemberService  {
  today = new Date();

  memberInfo: any;
  memberID: any;
  timeAndDateUpdated: any;

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

  getMemberInformation() {
    return this.firestore.collection('members').snapshotChanges();
  }

  async addMemberSubmit() {

    let data = this.form.getRawValue();
    
    try {
      const e = await this.firestore
        .collection('members')
        .add(data);
      console.log(e.id);
      console.log('Hi there, walang error');
    }
    catch (er) {
      console.log(er.message);
    }

  }

  async deleteMemberInformation(memberID: any){
    console.log(memberID);
    try {
      await this.firestore.collection('members').doc(memberID).delete();
      
      console.log('Hi there, walang error');
    }
    catch (er) {
      console.log(er.message);
    }
    //this.firestore.collection('members').doc(memberID).delete();
       
  }

  async updateMemberInformation(){
    //console.log('Hello, updateMemberInfoButton()');
    try {
      await this.firestore.doc('members/'+this.memberID).set(this.form.value);
      
      console.log('Hi there, walang error');
    }
    catch (er) {
      console.log(er.message);
    }
    //this.firestore.doc('members/'+this.memberID).set(this.form.value);
    
  }

  populateMemberInformationForm(memberInfo: any, memberID: any){
    console.log(memberInfo);
    this.form.setValue(memberInfo);

    if(memberInfo != null && memberID != null){
      this.memberID = memberID;
      this.memberInfo = memberID;
      console.log('updateMemberInformation Not Null');
    }

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
