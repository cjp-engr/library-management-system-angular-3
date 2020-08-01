import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member/member.service';
import { ToastrService } from 'ngx-toastr';
import { MEMBERINFORMATION, MemberFormsService } from 'src/app/shared/services/member/member-forms.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  memberInformation: any;
  memberID: any;
  memberInfo: any;
  closeModalAfterSubmit: any = '';

  constructor(
    private memberService: MemberService,
    private toastr: ToastrService,
    private memberFormsService: MemberFormsService
  ) {
    this.memberInformation = MEMBERINFORMATION
  }

  ngOnInit() {
    this.getMemberInformation();
  }

  getMemberInformation = () => {
    return this.memberFormsService.getMemberInformation();
  };

  populateMemberInformationForm(memberInfo: any, memberID: any) {

    this.memberInfo = memberInfo;
    this.memberID = memberID;
    this.memberService.populateMemberInformationForm(
      this.memberInfo,
      this.memberID
    );
  }

  updateMemberInfoButton() {
    if (this.memberService.form.valid) {
      this.memberService.updateMemberInformation();
      this.clearAllData();
      this.toastr.success(
        "You have successfully updated the member's information.",
        'Updated!'
      );
      this.closeModalAfterSubmit = 'modal';
    } else {
      this.toastr.warning('Please complete the form.', 'Required!');
    }
  }

  deleteMemberInfoButton(memberID: any) {
    this.memberID = memberID;
  }

  deleteYesButtonClicked() {
    this.memberService.deleteMemberInformation(this.memberID);
    this.clearAllData();
  }

  closeButtonClicked() {
    //console.log("closeButtonClicked");
    this.clearAllData();
  }

  clearAllData() {
    this.memberID = '';
    this.memberInfo = '';
    this.memberService.clearForm();
  }
}
