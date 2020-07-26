import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ForgotPasswordRecovery(email: string){
    this.authService.ForgotPassword(email);
  }

}
