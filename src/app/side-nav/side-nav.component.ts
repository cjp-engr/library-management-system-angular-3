import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { BookListService } from '../shared/services/book-list.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isShow = false;

  constructor(private authService: AuthService,
              private bookListService: BookListService) { }

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

}
