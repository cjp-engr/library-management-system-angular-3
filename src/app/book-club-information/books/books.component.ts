import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookModal: any;
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

  onAddBook(){
    this.booksService.saveAddedBook();
  }

}
