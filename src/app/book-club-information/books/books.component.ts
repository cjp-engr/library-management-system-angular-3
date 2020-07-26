import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { BookListService } from 'src/app/shared/services/book-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookModal: any;
  constructor(public booksService: BooksService,
              public bookListService: BookListService,
              public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onAddBook(){
    try{
      this.bookListService.afterClick_refreshBookList();
      this.booksService.saveAddedBook();
      this.addBookModal = 'modal';
      this.toastr.success('You have successfully added a new book', 'Added');
      
    }catch{
      this.toastr.warning('Please complete the form.', 'Warning!');
    }

    
  }

  addButtonIsClicked(){
    this.booksService.addButtonIsClicked_clearUploadUrl();
  }

}
