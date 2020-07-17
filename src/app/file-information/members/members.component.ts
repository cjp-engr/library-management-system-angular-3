import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';
import { FormControl, FormGroup } from "@angular/forms";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }

  onAddMemberSubmit(){
    if(this.memberService.form.valid){
      this.memberService.addMemberSubmit();
      this.memberService.clearForm();
    }else{
      window.alert('Not ok!');
    }
      
  }

}
