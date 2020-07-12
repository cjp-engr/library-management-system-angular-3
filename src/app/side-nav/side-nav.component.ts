import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isShow = false;

  constructor(private authService: AuthService) { }

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
