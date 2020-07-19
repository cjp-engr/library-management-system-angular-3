import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookModal: any;
  constructor(public booksService: BooksService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onAddBook(){

    if(this.booksService.form.valid){
      this.booksService.addBooks();
      this.booksService.saveImageButton();
      this.toastr.success('You have successfully added the book information.', 'Added!');
      this.booksService.clearForm();
      this.addBookModal = "modal"
    }else{
      this.toastr.warning('Please complete the form.', 'Required!');
    }

  }

}
