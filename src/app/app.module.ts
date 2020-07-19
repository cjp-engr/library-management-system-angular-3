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
import { AuthService } from './shared/services/auth.service';
import { MembersComponent } from './file-information/members/members.component';
import { BooksComponent } from './file-information/books/books.component';
import { AdminComponent } from './file-information/admin/admin.component';
import { DashboardComponent } from './file-information/dashboard/dashboard.component';
import { BorrowComponent } from './transaction-information/borrow/borrow.component';
import { BorrowedBooksComponent } from './transaction-information/borrowed-books/borrowed-books.component';
import { ReturnedBooksComponent } from './transaction-information/returned-books/returned-books.component';
import { ReportsComponent } from './transaction-information/reports/reports.component';
import { BookListComponent } from './file-information/books/book-list/book-list.component';
import { MemberListComponent } from './file-information/members/member-list/member-list.component';
import { MemberInformationComponent } from './file-information/member-information/member-information.component';
import { BookFormsComponent } from './file-information/books/book-forms/book-forms.component';
import { MemberFormsComponent } from './file-information/members/member-forms/member-forms.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MemberService } from './shared/services/member.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BooksService } from './shared/services/books.service';
import { SearchMemberComponent } from './file-information/member-information/search-member/search-member.component';
import { AdminListComponent } from './file-information/admin/admin-list/admin-list.component';
import { AdminFormComponent } from './file-information/admin/admin-form/admin-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    AdminFormComponent
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
    ToastrModule.forRoot(), NgbModule 

  ],
  providers: [AuthService,
              MemberService,
              BooksService],
  bootstrap: [AppComponent],
})

export class AppModule { 


}
