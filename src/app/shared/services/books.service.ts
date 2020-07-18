import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  bookInfo: any;
  bookID: any;
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    inputTitle: new FormControl(''),
    inputAuthor: new FormControl(''),
    inputISBN: new FormControl(''),
    inputYearPublished: new FormControl(''),
    inputStatus: new FormControl(''),
    inputType: new FormControl(''),
    inputDescription: new FormControl(''),
    inputGenre: new FormControl('')
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

}
