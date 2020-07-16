import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-forms',
  templateUrl: './book-forms.component.html',
  styleUrls: ['./book-forms.component.css'],
})
export class BookFormsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() {}

  ngOnInit() {
    this.dropdownList = [
      { id: 0, itemName: 'India' },
      { id: 1, itemName: 'Singapore' },
      { id: 2, itemName: 'Australia' },
      { id: 3, itemName: 'Canada' },
      { id: 4, itemName: 'South Korea' },
      { id: 5, itemName: 'Germany' },
      { id: 6, itemName: 'France' },
      { id: 7, itemName: 'Russia' },
      { id: 8, itemName: 'Italy' },
      { id: 9, itemName: 'Sweden' },
    ];
    this.selectedItems = [
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
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
}
