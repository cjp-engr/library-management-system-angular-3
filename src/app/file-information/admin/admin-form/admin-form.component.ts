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

  constructor(private afStorage: AngularFireStorage) {

   }

   upload(event: any) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
  }

   ngOnInit(): void {
  }

}
