import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { BookListService } from 'src/app/shared/services/book-list.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookModal: any;
  constructor(public booksService: BooksService,
              public bookListService: BookListService) { }

  ngOnInit(): void {
  }

  onAddBook(){

    this.booksService.saveAddedBook();
    this.bookListService.afterClick_refreshBookList();
  }

  addButtonIsClicked(){
    this.booksService.addButtonIsClicked_clearUploadUrl();
  }

}
