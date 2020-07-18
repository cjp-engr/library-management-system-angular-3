import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
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

  async addBooks() {

    let data = this.form.getRawValue();
    
    try {
      const e = await this.firestore
        .collection('books')
        .add(data);
      console.log(e.id);
      console.log('Hi there, walang error');
    }
    catch (er) {
      console.log(er.message);
    }

  }

  getBooksInformation() { 
    return this.firestore.collection('books').snapshotChanges();
  }

}
