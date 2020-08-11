import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class Members2Service {

  constructor() { }

  form = new FormGroup({        
    inputMemberImage: new FormControl(''),
    inputFirstName: new FormControl(''),
    inputMiddleInitial: new FormControl(''),
    inputLastName: new FormControl(''),
    inputAge: new FormControl(''),
    inputDateOfBirth: new FormControl(''),
    inputGender: new FormControl(''),
    inputStatus: new FormControl(''),
    inputMobileNumber: new FormControl(''),
    inputEmail: new FormControl(''),
    inputCurrentAddress: new FormControl(''),
    inputDateApplied: new FormControl(''),
    inputAddedBy: new FormControl(''),
    inputMembershipStatus: new FormControl('')

})
}
