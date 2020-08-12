import { Component, OnInit } from '@angular/core';
import { Members2Service } from 'src/app/shared/services/members2/members2.service';

@Component({
  selector: 'app-members2',
  templateUrl: './members2.component.html',
  styleUrls: ['./members2.component.css']
})
export class Members2Component implements OnInit {

  constructor(public members2Service: Members2Service) { }

  ngOnInit(): void {
  }

  onAddMembers2(){
    try{
      this.members2Service.addMembers2();
      //this.bookListService.afterClick_refreshBookList();
      //this.addBookModal = 'modal';
      //this.toastr.success('You have successfully added a new book', 'Added');
      console.log('onAddMembers2');
      
    }catch{
      //this.toastr.warning('Please complete the form.', 'Warning!');
      //it will be uncommented but depends on situation
      //this.bookListService.getBookListInformation();
    }

  }

  setAddNewMemberButtonClicked(){
    this.members2Service.setAddNewMemberButtonClicked(true);
  }

  clearForm(){
    this.members2Service.clearForm();
  }

}
