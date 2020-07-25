import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { ToastrService } from 'ngx-toastr';
import {  QueryList, ViewChildren } from '@angular/core';
import { BookListService, NgbdSortableHeader, BOOKS, SortEvent, compare } from 'src/app/shared/services/book-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookInformations: any;
  updateBookButton: any;
  bookInfo: any;
  bookID: any;

  books = BOOKS;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public booksService: BooksService,
    public bookListService: BookListService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getBooksInformation();

  }

  getBooksInformation = () => {

    this.bookListService.getBookListInformation();
  };

  populateBookInformationForm(bookInfo: any, bookID: any) {
    this.bookInfo = bookInfo;
    this.bookID = bookID;
    this.booksService.populateBookInformationForm(this.bookInfo, this.bookID);
  }

  updateBookInformation() {
    if (this.booksService.form.valid) {
      this.booksService.updateBookInformation();
      this.clearAllData();
      this.toastr.success(
        'You have successfully updated the book information.',
        'Updated!'
      );
      this.updateBookButton = 'modal';
    } else {
      this.toastr.warning('Please complete the form.', 'Warning!');
    }
    this.bookListService.refreshAllBookData_afterUpdate();

  }

  closeButtonClicked() {
    this.clearAllData();
  }

  clearAllData() {
    this.bookID = '';
    this.bookInfo = '';
    this.booksService.clearForm();
  }

  updateListIsClicked() {
    this.booksService.updateListIsClicked_clearUploadUrl();
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    let i = 0;
    // sorting countries   books = BOOKS;
    if (direction === '' || column === '') {
      this.books = BOOKS;

    } else {
      this.books = [...BOOKS].sort((a, b) => {
        const res = compare(a[column], b[column]);

        return direction === 'asc' ? res : -res;
      });
    }
  }

}







