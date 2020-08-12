import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Members2Service {
  newUploadImageUrl: any;
  event: any;
  imageName: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: any;
  members2ImageUrl: any = '';
  membershipStatus_members2ID: any;
  uploadImage_members2ID: any;
  isMembers2WantToDeactivate: boolean;

  constructor(    
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage) { }

  form = new FormGroup({        
    inputMemberImage: new FormControl(''),
    inputFirstName: new FormControl(''),
    inputMiddleInitial: new FormControl(''),
    inputLastName: new FormControl(''),
    inputAge: new FormControl(''),
    inputDateOfBirth: new FormControl(''),
    inputGender: new FormControl(''),
    inputStatus: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputEmail: new FormControl(''),
    inputCurrentAddress: new FormControl(''),
    inputDateApplied: new FormControl(''),
    inputAddedBy: new FormControl(''),
    inputMembershipStatus: new FormControl('')

})

async addMembers2() {
  let data = this.form.getRawValue();

  try {
    const e = await this.firestore.collection('members2').add(data);
    //console.log(e.id);
  } catch (er) {
    console.log(er.message);
  }
  console.log('Done Adding Member');
  this.clearForm();
}

populateMembers2InformationForm(memberInfo: any){
  //console.log(memberInfo);
  this.form.setValue(memberInfo);

}

getDeactivateMembers2InfoID(members2InfoID: any){
/* 
  return this.firestore
       .collection("members2")
       .doc(data.payload.doc.id)
       .set({ completed: true }, { merge: true });
        */
  this.membershipStatus_members2ID = members2InfoID;
  console.log(this.membershipStatus_members2ID);
  
}


members2DeactivateAction(membersAction: boolean){
  this.isMembers2WantToDeactivate = membersAction;
}

deactivateActionMembers2(){
  console.log(this.isMembers2WantToDeactivate);
  console.log(this.membershipStatus_members2ID);

  if(this.isMembers2WantToDeactivate){
    return this.firestore
    .collection("members2")
    .doc(this.membershipStatus_members2ID)
    .set({ inputMembershipStatus: "Deactivated" }, { merge: true });
  }

}

clearForm() {
  if (this.form.valid) {
    this.form.reset({

      inputMemberImage: '',
      inputFirstName: '',
      inputMiddleInitial: '',
      inputLastName: '',
      inputAge: '',
      inputDateOfBirth: '',
      inputGender: '',
      inputStatus: '',
      inputMobileNumber: '',
      inputEmail: '',
      inputCurrentAddress: '',
      inputDateApplied: '',
      inputAddedBy: '',
      inputMembershipStatus: ''

    });
  }
}

uploadImage(event: any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.newUploadImageUrl = event.target.result;
    }
  }
  this.setEventInfo(event);

}

setEventInfo(event: any) {
  this.event = event;
}

saveAddedBook() {

  console.log(this.imageName);
  const ID = 'members2/' + this.imageName;
  this.ref = this.afStorage.ref(ID);
  this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
  let storageRef = this.afStorage.ref(ID);
  this.task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = storageRef.getDownloadURL();
        this.downloadURL.subscribe(async (downloadURLResponse: any) => {
          await downloadURLResponse;
          this.members2ImageUrl = downloadURLResponse;
          if(this.members2ImageUrl != null || this.members2ImageUrl != ""){
            this.updateMemberInfo_ImageUpload(this.members2ImageUrl);
          }

        }
        );
      })
    )
    .subscribe();
  
  //this.uploadProgress = this.task.percentageChanges();

}

getImageMembers2InfoID(members2InfoID: any){
  this.uploadImage_members2ID = members2InfoID;
  
}

updateMemberInfo_ImageUpload(imageUrl: any){
  return this.firestore
  .collection("members2")
  .doc(this.uploadImage_members2ID)
  .set({ inputMemberImage: imageUrl }, { merge: true });
}

setImageName(imageName: any) {
  this.imageName = imageName;
  //console.log(this.imageName);
}

}
