import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  model: NgbDateStruct;

  uploadProgress: Observable<number>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: any;
  event: any;

  constructor(private afStorage: AngularFireStorage) {}
   
  ngOnInit(): void {
  }

   upload(event: any) {
     this.event = event;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }

  }

  saveImageButton(){
    const empID = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(empID);
    this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
    this.uploadProgress = this.task.percentageChanges(); 
    this.clearAllData();
  }
  
  clearAllData(){
    this.event = '';
    this.url = '';
    this.uploadProgress = null;
    this.ref = null;
    this.task = null;
  }

}
