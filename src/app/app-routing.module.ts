import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { AdminComponent } from './file-information/admin/admin.component';
import { MembersComponent } from './file-information/members/members.component';
import { BooksComponent } from './file-information/books/books.component';
import { DashboardComponent } from './file-information/dashboard/dashboard.component';
import { BorrowComponent } from './transaction-information/borrow/borrow.component';
import { BorrowedBooksComponent } from './transaction-information/borrowed-books/borrowed-books.component';
import { ReturnedBooksComponent } from './transaction-information/returned-books/returned-books.component';
import { ReportsComponent } from './transaction-information/reports/reports.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-information', component: AdminComponent},
  {path: 'members', component: MembersComponent},
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
