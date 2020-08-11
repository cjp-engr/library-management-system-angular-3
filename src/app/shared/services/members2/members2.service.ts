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
  console.log('this.imageName');
  console.log(this.imageName);
  const bookID = 'members2/' + this.imageName;
  this.ref = this.afStorage.ref(bookID);
  this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
  let storageRef = this.afStorage.ref(bookID);
  this.task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = storageRef.getDownloadURL();
        this.downloadURL.subscribe(async (downloadURLResponse: any) => {
          await downloadURLResponse;
          this.members2ImageUrl = downloadURLResponse;

        },
        );
      })
    )
    .subscribe();
  
  //this.uploadProgress = this.task.percentageChanges();

}

setImageName(imageName: any) {
  this.imageName = imageName;
  //console.log(this.imageName);
}

}
