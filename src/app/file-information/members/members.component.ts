import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';

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
      this.memberService.onAddMemberSubmit();
  }

}
