import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  bookInfo: any;
  bookID: any;

  //uploadProgress: Observable<number>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: any;
  event: any;

  constructor(private firestore: AngularFirestore, private afStorage: AngularFireStorage) {}

  form = new FormGroup({
    inputTitle: new FormControl('', Validators.required),
    inputAuthor: new FormControl('', Validators.required),
    inputISBN: new FormControl('', Validators.required),
    inputYearPublished: new FormControl('', Validators.required),
    inputStatus: new FormControl('', Validators.required),
    inputType: new FormControl('', Validators.required),
    inputDescription: new FormControl('', Validators.required),
    inputGenre: new FormControl('', Validators.required),
    inputBarcode: new FormControl('', Validators.required)
  });

  getBooksInformation() { 
    return this.firestore.collection('books').snapshotChanges();
  }

  async addBooks() {

    let data = this.form.getRawValue();
    
    try {
      const e = await this.firestore
        .collection('books')
        .add(data);
        console.log(e.id);
    }
    catch (er) {
      console.log(er.message);
    }

  }

  async updateBookInformation(){
    try {
      await this.firestore.doc('books/'+this.bookID).set(this.form.value);
      
    }
    catch (er) {
      console.log(er.message);
    }
  }

  populateBookInformationForm(bookInfo: any, bookID: any){
    this.form.setValue(bookInfo);
    this.bookInfo = bookInfo;
    this.bookID = bookID;
  }

  clearForm(){
    if(this.form.valid){
      this.form.reset({
        inputTitle: '',
        inputAuthor: '',
        inputISBN: '',
        inputYearPublished: '',
        inputStatus: '',
        inputType: '',
        inputDescription: '',
        inputGenre: '',
        inputBarcode: ''
      })
    }
  }

  setEventInfo(event: any){
    this.event = event;
  }

  saveImageButton(){
    const empID = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(empID);
    this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
    console.log(this.event);
    //this.uploadProgress = this.task.percentageChanges(); 
    this.clearAllData();
  }

  clearAllData(){
    this.event = '';
    this.url = '';
    //this.uploadProgress = null;
    this.ref = null;
    this.task = null;
  }


}
