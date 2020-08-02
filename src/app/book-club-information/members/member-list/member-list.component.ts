import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member/member.service';
import { ToastrService } from 'ngx-toastr';
import { MemberListService, MEMBERINFORMATION, NgbdSortableHeaderMemberList, SortEvent, compare } from 'src/app/shared/services/member/member-list.service';
import { Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

//import { MEMBERINFORMATION, MemberFormsService } from 'src/app/shared/services/member/member-forms.service';

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

  //for sorting
  memberSorting = MEMBERINFORMATION;

  constructor(
    private memberService: MemberService,
    private toastr: ToastrService,
    //private memberFormsService: MemberFormsService
    private memberListService: MemberListService
  ) {
    //this.memberInformation = MEMBERINFORMATION
    
  }

  ngOnInit() {
    this.getMemberInformation();
  }

  @ViewChildren(NgbdSortableHeaderMemberList) headers: QueryList<NgbdSortableHeaderMemberList>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortableMemberList !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.memberSorting = MEMBERINFORMATION;
    } else {
      this.memberSorting = [...MEMBERINFORMATION].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }


  getMemberInformation = () => {
    //return this.memberFormsService.getMemberInformation();
    return this.memberListService.getMemberInformation();
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
