import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { ToastrService } from 'ngx-toastr';
import { QueryList, ViewChildren } from '@angular/core';
import {
  BookListService,
  NgbdSortableHeaderBookList,
  BOOKS,
  SortEvent,
  compare,
} from 'src/app/shared/services/books/book-list.service';

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

  /* book-list-sorting */
  bookSorting = BOOKS;
  @ViewChildren(NgbdSortableHeaderBookList) headers: QueryList<NgbdSortableHeaderBookList>;
  /* book-list-sorting */

  /* pagination */

  collection = { count: BOOKS.length };
  config: any;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`,
  };

  constructor(
    public booksService: BooksService,
    public bookListService: BookListService,
    private toastr: ToastrService
  ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count,
    };
  }

  /* pagination */

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
    this.bookListService.afterClick_refreshBookList();
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

  /* book-list-sorting */

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortableBookList !== column) {
        header.direction = '';
      }
    });

    if (direction === '' || column === '') {
      this.bookSorting = BOOKS;
    } else {
      this.bookSorting = [...BOOKS].sort((a, b) => {
        const res = compare(a[column], b[column]);

        return direction === 'asc' ? res : -res;
      });
    }
  }
  /* book-list-sorting */

  /* pagination */
  onPageChange(event: any) {
    console.log(event);
    this.config.currentPage = event;
  }
  /* pagination */
  
}
