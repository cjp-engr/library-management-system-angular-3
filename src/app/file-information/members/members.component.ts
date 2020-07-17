import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';
//import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MemberService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onAddMemberSubmit(){
    if(this.memberService.form.valid){
      this.memberService.addMemberSubmit();
      this.memberService.clearForm();
      this.toastr.success('You have successfully added new member', 'Success!');
    }else{
      //window.alert('Not ok!');
      this.toastr.warning('Please complete the form', 'Not Complete');
    }
      
  }

}
