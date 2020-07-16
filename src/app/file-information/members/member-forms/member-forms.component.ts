import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-forms',
  templateUrl: './member-forms.component.html',
  styleUrls: ['./member-forms.component.css']
})
export class MemberFormsComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
  }
/* 
   onSubmit() {
    
    let data = this.memberService.form.value;

    this.memberService.addNewMember(data)
            .then(res => {

        }); 

}  
*/

}
