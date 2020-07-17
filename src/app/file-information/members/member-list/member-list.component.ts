import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})


export class MemberListComponent implements OnInit {

  memberInformation: any;
  memberID: any;

  constructor(private memberService: MemberService) { }

  ngOnInit(){
    this.getMemberInformation();
  }

  getMemberInformation = () => {
    this.memberService
    .getMemberInformation()
    .subscribe((res: any) =>(this.memberInformation = res));
  }

  populateMemberInformationForm(memberInfo: any, memberID: any){
    this.memberService.populateMemberInformationForm(memberInfo, memberID);
  }

  updateMemberInfoButton(){
    if(this.memberService.form.valid){
      this.memberService.updateMemberInformation();
      this.memberService.clearForm();
    }

  }

  deleteMemberInfoButton(memberID: any){
    this.memberID = memberID;
  }

  deleteYesButtonClicked(){
    this.memberService.deleteMemberInformation(this.memberID);
  }

  closeButtonClicked(){
    //console.log("closeButtonClicked");
    this.memberService.clearForm();
  }

}
