import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookInformations:any;
  updateBookButton: any;
  bookInfo: any; 
  bookID: any

  constructor(public booksService: BooksService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getBooksInformation();
  }

  getBooksInformation = () => {
    this.booksService.getBooksInformation()
      .subscribe(res => (this.bookInformations = res));
      
  }

  populateBookInformationForm(bookInfo: any, bookID: any){
    this.bookInfo = bookInfo;
    this.bookID = bookID;
    this.booksService.populateBookInformationForm(this.bookInfo, this.bookID);
  }

  updateBookInformation(){
    if(this.booksService.form.valid){
      this.booksService.updateBookInformation();
      //console.log('bookds '+this.booksService.getBookImageURL());
      this.clearAllData();
      this.toastr.success('You have successfully updated the book information.', 'Updated!');
      this.updateBookButton = "modal";
    }else{
      this.toastr.warning('Please complete the form.', 'Warning!');
    }

  }

  closeButtonClicked(){
    this.clearAllData();
  }

  clearAllData(){
    this.bookID = '';
    this.bookInfo = '';
    this.booksService.clearForm();
  }

}
