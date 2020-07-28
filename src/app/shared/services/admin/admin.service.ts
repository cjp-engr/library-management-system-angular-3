import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  form = new FormGroup({
    inputImageUrl: new FormControl(''),
    inputDB_ID: new FormControl(''),
    inputFirstName: new FormControl(''),
    inputMiddleName: new FormControl(''),
    inputLastName: new FormControl(''),
    inputUserName: new FormControl(''),
    inputGender: new FormControl(''),
    inputDateOfBirth: new FormControl(''),
    inputMaritalStatus: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputTelephoneNumber: new FormControl(''),
    inputEmail: new FormControl(''),
    inputAddress: new FormControl(''),
    inputPosition: new FormControl(''),
    inputEmployeeNo: new FormControl(''),
    inputHireDate: new FormControl(''),
    inputEmploymentStatus: new FormControl(''),
    inputDepartment: new FormControl(''),
    inputSalary: new FormControl(''),
    inputReportsTo: new FormControl(''),
    employeeFormCompleted: new FormControl(false),
  });

  async addEmployeeAdmin() {
    let data = this.form.getRawValue();

    try {
      const e = await this.firestore.collection('employeesAdmin').add(data);
      //console.log(e.id);
    } catch (er) {
      console.log(er.message);
    }
    console.log('Done Adding Employee');
  }

  trylangKungGumagana(){
    console.log(this.imageName.replace(/\s+/g, '-').toLowerCase());
  }

  saveAddedEmployeeAdmin() {

  
  }


  populateEmployeeAdminInformationForm(
    emp_adminID_DBAfterRegister: string,
    employeeAdminInfo: any
  ) {
    this.form.setValue({
      inputDB_ID: emp_adminID_DBAfterRegister,
      inputFirstName: employeeAdminInfo.emp_adminFirstNameAfterRegister,
      inputLastName: employeeAdminInfo.emp_adminLastNameAfterRegister,
      inputUserName: employeeAdminInfo.emp_adminUserNameAfterRegister,
      inputEmail: employeeAdminInfo.emp_adminEmailAfterRegister,

      inputMiddleName: this.form.controls.inputMiddleName.value,
      inputGender: this.form.controls.inputGender.value,
      inputDateOfBirth: '' + this.form.controls.inputDateOfBirth.value,
      inputMaritalStatus: this.form.controls.inputMaritalStatus.value,
      inputMobileNumber: this.form.controls.inputMobileNumber.value,
      inputTelephoneNumber: this.form.controls.inputTelephoneNumber.value,
      inputAddress: this.form.controls.inputAddress.value,
      inputPosition: this.form.controls.inputPosition.value,
      inputEmployeeNo: emp_adminID_DBAfterRegister.slice(2, 15).toUpperCase(),
      inputHireDate: '' + this.form.controls.inputHireDate.value,
      inputEmploymentStatus: this.form.controls.inputEmploymentStatus.value,
      inputDepartment: this.form.controls.inputDepartment.value,
      inputSalary: this.form.controls.inputSalary.value,
      inputReportsTo: this.form.controls.inputReportsTo.value,

      inputImageUrl: this.form.controls.inputImageUrl.value,

      employeeFormCompleted: this.form.controls.employeeFormCompleted.value,
    });
    this.imageName = this.form.controls.inputUserName.value+' '+this.form.controls.inputEmployeeNo.value;
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

  saveEmployeeAdminImage(){
    
    let empAdminImageName = this.imageName.replace(/\s+/g, '-').toLowerCase();
    const employeeAdminID = 'employeesAdmin/'+empAdminImageName;
    this.ref = this.afStorage.ref(employeeAdminID);
    this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
    let storageRef = this.afStorage.ref(employeeAdminID);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = storageRef.getDownloadURL();
          this.downloadURL.subscribe(async (downloadURLResponse: any) => {
            await downloadURLResponse;
            this.employeeAdminImageUrl = downloadURLResponse;
            console.log(this.employeeAdminImageUrl);
          },
          );
        })
      )
      .subscribe();
    
  }

}
