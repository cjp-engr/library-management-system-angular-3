import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { AdminComponent } from './file-information/admin/admin.component';
import { DashboardComponent } from './file-information/dashboard/dashboard.component';
import { BorrowComponent } from './transaction-information/borrow/borrow.component';
import { BorrowedBooksComponent } from './transaction-information/borrowed-books/borrowed-books.component';
import { ReturnedBooksComponent } from './transaction-information/returned-books/returned-books.component';
import { ReportsComponent } from './transaction-information/reports/reports.component';
import { BooksComponent } from './book-club-information/books/books.component';
import { MemberInformationComponent } from './book-club-information/member-information/member-information.component';
import { MembersComponent } from './book-club-information/members/members.component';
import { Members2Component } from './book-club-information/members2/members2.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-information', component: AdminComponent},
  {path: 'member-information', component: MemberInformationComponent},
  {path: 'members', component: MembersComponent},
  {path: 'members2', component: Members2Component},
  {path: 'books', component: BooksComponent},
  {path: 'borrow', component: BorrowComponent},
  {path: 'borrowed-books', component: BorrowedBooksComponent},
  {path: 'returned-books', component: ReturnedBooksComponent},
  {path: 'reports', component: ReportsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
