import { Injectable } from '@angular/core';
import { IAdmin_AfterRegister } from '../../interface/admin';

export const ADMIN_AFTER_REGISTER: IAdmin_AfterRegister[] = [];

@Injectable({
  providedIn: 'root',
})
export class AdminFormService {
  constructor() {}


  afterClick_refreshAdminInfo_AfterRegister(){
    while(ADMIN_AFTER_REGISTER.length != 0){
      ADMIN_AFTER_REGISTER.pop();
    }
  }

}
