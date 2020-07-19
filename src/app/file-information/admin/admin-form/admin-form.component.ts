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

  constructor(private afStorage: AngularFireStorage) {

   }

   
   ngOnInit(): void {
  }

   upload(event: any) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }

    const id = Math.random().toString(36).substring(2);
    
    this.ref = this.afStorage.ref(id); // create a reference to the storage bucket location
    this.task = this.ref.put(event.target.files[0]); // the put method creates an AngularFireUploadTask and kicks off the upload
    this.uploadProgress = this.task.percentageChanges();

  }

}
