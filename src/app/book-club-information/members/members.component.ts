import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member/member.service';
import { ToastrService } from 'ngx-toastr';
import { MemberFormsService } from 'src/app/shared/services/member/member-forms.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  closeModalAfterSubmit: any = "";

  constructor(
    private memberService: MemberService,
    private toastr: ToastrService,
    private memberFormsService: MemberFormsService
  ) {}

  ngOnInit(): void {

  }

  onAddMemberSubmit() {
    if (this.memberService.form.valid) {
      this.memberService.addMemberSubmit();
      this.memberService.clearForm();
      this.toastr.success(
        'You have successfully added new member.',
        'Added!'
      );
      this.closeModalAfterSubmit = "modal";
      this.memberFormsService.afterClick_refreshMemberList();
      //this.memberFormsService.getMemberInformation();

    } else {
      //window.alert('Not ok!');
      this.toastr.warning('Please complete the form.', 'Required!');
    }
  }
}
