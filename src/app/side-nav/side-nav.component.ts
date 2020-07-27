import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { BookListService } from '../shared/services/books/book-list.service';
import { AdminFormService } from '../shared/services/admin/admin-form.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isShow = false;
  isBookTabClicked: boolean;

  constructor(private authService: AuthService,
              private bookListService: BookListService,
              private adminFormService: AdminFormService) { }

  ngOnInit(): void {
  }

  UserSignOut(){
    this.authService.SignOut();
  }

  IsUserLoggedIn(){
    return this.authService.isLoggedIn;
  }

  IsUserLoggedOut(){
    this.isShow = !!this.isShow;
  }

  bookTabIsClicked(isActive: boolean){
    if(!isActive){
      this.bookListService.afterClick_refreshBookList();
    }
  }

  adminTabIsClicked(isActive: boolean){
    
    if(!isActive){
      this.adminFormService.afterClick_refreshAdminInfo_AfterRegister();
    }
  }

}
