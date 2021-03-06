import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { AuthService } from './shared/services/auth/auth.service';
import { MembersComponent } from './book-club-information/members/members.component';
import { BooksComponent } from './book-club-information/books/books.component';
import { AdminComponent } from './file-information/admin/admin.component';
import { DashboardComponent } from './file-information/dashboard/dashboard.component';
import { BorrowComponent } from './transaction-information/borrow/borrow.component';
import { BorrowedBooksComponent } from './transaction-information/borrowed-books/borrowed-books.component';
import { ReturnedBooksComponent } from './transaction-information/returned-books/returned-books.component';
import { ReportsComponent } from './transaction-information/reports/reports.component';
import { BookListComponent } from './book-club-information/books/book-list/book-list.component';
import { MemberListComponent } from './book-club-information/members/member-list/member-list.component';
import { MemberInformationComponent } from './book-club-information/member-information/member-information.component';
import { BookFormsComponent } from './book-club-information/books/book-forms/book-forms.component';
import { MemberFormsComponent } from './book-club-information/members/member-forms/member-forms.component';
import { SearchMemberComponent } from './book-club-information/member-information/search-member/search-member.component';
import { AdminListComponent } from './file-information/admin/admin-list/admin-list.component';
import { AdminFormComponent } from './file-information/admin/admin-form/admin-form.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { MemberService } from './shared/services/member/member.service';
import { BooksService } from './shared/services/books/books.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeaderBookList, BookListService } from './shared/services/books/book-list.service';

import { NgxPaginationModule } from 'ngx-pagination';

//import { AdminFormService } from './shared/services/admin/admin-form.service';
import { AdminService } from './shared/services/admin/admin.service';
import { AdminListService } from './shared/services/admin/admin-list.service';
import { MemberListService, NgbdSortableHeaderMemberList } from './shared/services/member/member-list.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Members2Component } from './book-club-information/members2/members2.component';
import { Members2ListComponent } from './book-club-information/members2/members2-list/members2-list.component';
import { Members2FormComponent } from './book-club-information/members2/members2-form/members2-form.component';
import { Members2Service } from './shared/services/members2/members2.service';
import { Members2ListService } from './shared/services/members2/members2-list.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    DashboardComponent,
    MembersComponent,
    BooksComponent,
    AdminComponent,
    BorrowComponent,
    BorrowedBooksComponent,
    ReturnedBooksComponent,
    ReportsComponent,
    BookListComponent,
    MemberListComponent,
    MemberInformationComponent,
    BookFormsComponent,
    MemberFormsComponent,
    SearchMemberComponent,
    AdminListComponent,
    AdminFormComponent,
    NgbdSortableHeaderBookList,
    NgbdSortableHeaderMemberList,
    Members2Component,
    Members2ListComponent,
    Members2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule, 
    AngularFireAuthModule,
    AngularMultiSelectModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  providers: [AuthService,
              MemberService,
              MemberListService,
              BooksService,
              BookListService,
              //AdminFormService,
              AdminListService,
              AdminService,
              Members2Service,
              Members2ListService
            ],
              
  bootstrap: [AppComponent],

})

export class AppModule { 


}
