import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  bookInfo: any;
  bookID: any;

  uploadProgress: Observable<number>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: any;
  event: any;
  image: any;
  downloadURL: any;
  imageName: any;
  bookImageUrl: any;
  //empID: any;

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
    inputBarcode: new FormControl('', Validators.required),
    //inputImageURL: new FormControl('')
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
        //console.log(e.id);
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
        inputBarcode: '',
        inputImage: '',
        //inputImageURL: ''
      })
    }
  }

  setEventInfo(event: any){
    this.event = event;
  }

  saveImageButton(){

    const empID = 'books/ereredf';
    this.ref = this.afStorage.ref(empID);
    //console.log(this.ref);
    this.task = this.ref.put((<HTMLInputElement>this.event.target).files[0]);
    this.uploadProgress = this.task.percentageChanges();
    //console.log(this.uploadProgress);

let storageRef = this.afStorage.ref(empID);
 this.task.snapshotChanges()
    .pipe(
          finalize(() => {
            this.downloadURL = storageRef.getDownloadURL();
            this.downloadURL.subscribe((downloadURLResponse: any) => {
               console.log('downloadURL', downloadURLResponse);
               this.bookImageUrl = downloadURLResponse;
               console.log(this.bookImageUrl);
               console.log(this.uploadProgress);
            });
          }),
     )
    .subscribe(); 

  //this.clearAllData();  
  }
/*   
  sampleOnly(){
    let storageRef = this.afStorage.ref(this.empID+'.png');
    this.task.snapshotChanges()
    .pipe(
          finalize(() => {
            this.downloadURL = storageRef.getDownloadURL();
            this.downloadURL.subscribe((downloadURLResponse: any) => {
               console.log('downloadURL', downloadURLResponse);
               this.bookImageUrl = downloadURLResponse;
               console.log(this.bookImageUrl);
               console.log(this.uploadProgress);
            });
          }),
     )
    .subscribe(); 
    console.log(this.bookImageUrl);
  }
 */
  getBookImageURL(){
    return this.bookImageUrl;
  }

  clearAllData(){
    this.event = '';
    this.url = '';
    //this.uploadProgress = null;
    this.ref = null;
    this.task = null;
  }

  setImageName(imageName: any){
    this.imageName = imageName;
    console.log(this.imageName);
  }


}
