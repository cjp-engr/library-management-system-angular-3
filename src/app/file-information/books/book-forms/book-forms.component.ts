import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
//import { Observable } from 'rxjs';
//import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';


@Component({
  selector: 'app-book-forms',
  templateUrl: './book-forms.component.html',
  styleUrls: ['./book-forms.component.css'],
})
export class BookFormsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  url: any;

/*   uploadProgress: Observable<number>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: any;
  event: any; */

  constructor(public booksService:BooksService) {}

  ngOnInit() {
    var genre = [
      'Action and adventure',
      'Art/architecture',
      'Alternate history',
      'Autobiography',
      'Anthology',
      'Biography',
      'Chick lit',
      'Business/economics',
      "Children's",
      'Crafts/hobbies',
      'Classic',
      'Cookbook',
      'Comic book',
      'Diary',
      'Coming-of-age',
      'Dictionary',
      'Crime',
      'Encyclopedia',
      'Drama',
      'Guide',
      'Fairytale',
    ];
    this.dropdownList = [
      { id: 0, itemName: genre[0] },
      { id: 1, itemName: genre[1] },
      { id: 2, itemName: genre[2] },
      { id: 3, itemName: genre[3] },
      { id: 4, itemName: genre[4] },
      { id: 5, itemName: genre[5] },
      { id: 6, itemName: genre[6] },
      { id: 7, itemName: genre[7] },
      { id: 8, itemName: genre[8] },
      { id: 9, itemName: genre[9] },
      { id: 10, itemName: genre[10] },
      { id: 11, itemName: genre[11] },
      { id: 12, itemName: genre[12] },
      { id: 13, itemName: genre[13] },
      { id: 14, itemName: genre[14] },
      { id: 15, itemName: genre[15] },
      { id: 16, itemName: genre[16] },
      { id: 17, itemName: genre[17] },
      { id: 18, itemName: genre[18] },
      { id: 19, itemName: genre[19] },
      { id: 20, itemName: genre[20] },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Genre',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,

      //classes: 'myclass custom-class'
    };
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  uploadImage(event: any) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
    this.booksService.setEventInfo(event);
  }

}
