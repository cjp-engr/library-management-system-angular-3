import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  event: any;
  newUploadImageUrl: any;
  imageName: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: any;
  employeeAdminImageUrl: any;

  employeeUID: any;

  employeeAdminImageUpdated: boolean;

  constructor(
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  form = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    uid: new FormControl(''),

    inputMiddleName: new FormControl(''),
    inputImageUrl: new FormControl(''),
    inputDB_ID: new FormControl(''),
    inputGender: new FormControl(''),
    inputDateOfBirth: new FormControl(''),
    inputMaritalStatus: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputTelephoneNumber: new FormControl(''),
    inputAddress: new FormControl(''),
    inputPosition: new FormControl(''),
    inputEmployeeNo: new FormControl(''),
    inputHireDate: new FormControl(''),
    inputEmploymentStatus: new FormControl(''),
    inputBranch: new FormControl(''),
    inputSalary: new FormControl(''),
    inputReportsTo: new FormControl('')
  });


  populateEmployeeAdminInformationForm(
    emp_adminID_DB: string,
    employeeAdminInfo: any
  ) {
    this.form.setValue({
      inputDB_ID: emp_adminID_DB,
      firstName: employeeAdminInfo.employee_adminFirstName,
      lastName: employeeAdminInfo.employee_adminLastName,
      displayName: employeeAdminInfo.employee_adminUserName,
      email: employeeAdminInfo.employee_adminEmail,
      uid: employeeAdminInfo.employee_adminUID,

      inputEmployeeNo: emp_adminID_DB.slice(2, 15).toUpperCase(),
      inputMiddleName: employeeAdminInfo.employee_adminMiddleName,
      inputGender: employeeAdminInfo.employee_adminGender,
      inputDateOfBirth: employeeAdminInfo.employee_adminDateOfBirth,
      inputMaritalStatus: employeeAdminInfo.employee_adminMaritalStatus,
      inputMobileNumber: employeeAdminInfo.employee_adminMobileNumber,
      inputTelephoneNumber: employeeAdminInfo.employee_adminTelephoneNumber,
      inputAddress: employeeAdminInfo.employee_adminAddress,
      inputPosition: employeeAdminInfo.employee_adminPosition,
      inputHireDate: employeeAdminInfo.employee_adminHireDate,
      inputEmploymentStatus: employeeAdminInfo.employee_adminEmploymentStatus,
      inputBranch: employeeAdminInfo.employee_adminBranch,
      inputSalary: employeeAdminInfo.employee_adminSalary,
      inputReportsTo: employeeAdminInfo.employee_adminReportsTo,
      
      inputImageUrl: employeeAdminInfo.employee_adminImage

    });

    //console.log(employeeAdminInfo.emp_adminFirstNameAfterRegister);
    //console.log(employeeAdminInfo.emp_adminID_IsUserCompletedForm);
    
    this.imageName = this.form.controls.displayName.value+'_'+this.form.controls.inputEmployeeNo.value;
    this.employeeUID = emp_adminID_DB;
    console.log(this.employeeUID);
  }

  async updateEmployeeAdminInformation() {
    try {
      await this.firestore.doc('employees/' + this.employeeUID).set(this.form.value);
      
    } catch (er) {
      console.log(er.message);
    }
  }

  updateEmployeeAdminImage(){
    //console.log(this.employeeAdminImageUrl);
    if(this.employeeAdminImageUrl != null){
      console.log('i am not null');
      this.employeeAdminImageUpdated = true;
      return this.firestore.collection('employees')
      .doc(this.employeeUID)
      .set({ inputImageUrl: this.employeeAdminImageUrl}, { merge: true });

    }else{
      console.log('employee image is not change');
      this.employeeAdminImageUpdated = false;
    }

  }

  /* IMAGE UPLOADING */

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

  saveEmployeeAdminImage(){

    let empAdminImageName = this.imageName.replace(/\s+/g, '-').toLowerCase();
    const employeeAdminID = 'employees/'+empAdminImageName;
    this.ref = this.afStorage.ref(employeeAdminID);
    this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
    let storageRef = this.afStorage.ref(employeeAdminID);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = storageRef.getDownloadURL();
          this.downloadURL.subscribe( (downloadURLResponse: string) => {
            downloadURLResponse;
            if(downloadURLResponse.length != 0){
              this.employeeAdminImageUrl = downloadURLResponse;
              console.log(this.employeeAdminImageUrl);
            }
            
           
          },
          );
        })
      )
      .subscribe();
    
  }

    /* IMAGE UPLOADING */

    clearEmployeeAdminResetValues(){
      this.event = null;
      this.newUploadImageUrl = null;
      this.imageName = null;
      this.ref = null;
      this.task = null;
      this.downloadURL = null;
      this.employeeAdminImageUrl = null;
    
      this.employeeUID = null;
    
      this.employeeAdminImageUpdated = false;


    }

}
