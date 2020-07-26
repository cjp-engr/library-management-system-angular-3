import { Injectable } from '@angular/core';
import { BooksService } from './books.service';

import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../interface/book';
import { AngularFirestore } from '@angular/fire/firestore';

export const BOOKS: IBook[] = [];

export type SortColumn = keyof IBook | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  constructor(private firestore: AngularFirestore) {}

  //get from firebase collection to book list page
  getBookListInformation() {
    return this.firestore
      .collection('books')
      .snapshotChanges()
      .subscribe((res) => {
        res.map((a) => {
          const bookList: IBook = {
            bookImageURL: a.payload.doc.get('inputImageURL'),
            bookTitle: a.payload.doc.get('inputTitle'),
            bookAuthor: a.payload.doc.get('inputAuthor'),
            bookISBN: a.payload.doc.get('inputISBN'),
            bookType: a.payload.doc.get('inputType'),
            bookYearPublished: a.payload.doc.get('inputYearPublished'),
            bookStatus: a.payload.doc.get('inputStatus'),
            bookInfoData: a.payload.doc.data(),
            bookInfoID: a.payload.doc.id,
          };

          BOOKS.push(bookList);
        });
        //console.log(BOOKS.length);
        
      });
      
  }

  afterClick_refreshBookList() {
    while (BOOKS.length != 0) {
      BOOKS.pop();
    }
  }
}
