import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookInformations:any;
  updateBookButton: any;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.getBooksInformation();
  }
/* 
  ...  coffeeOrders;   getCoffeeOrders = () =>
      this.ordersService
      .getCoffeeOrders()
      .subscribe(res =>(this.coffeeOrders = res));
   */
  getBooksInformation = () => {
    this.booksService.getBooksInformation()
      .subscribe(res => (this.bookInformations = res));
      //console.log('getBooksInformation');
  }

  populateBookInformationForm(bookInfo: any, bookID: any){
    console.log(bookID);
    console.log(bookInfo);
    this.booksService.populateBookInformationForm(bookInfo, bookID);
  }

  updateBookInformation(){
    this.booksService.updateBookInformation();
    this.updateBookButton = "modal";
  }

}
