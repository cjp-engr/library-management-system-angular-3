import { Component, OnInit } from '@angular/core';
import { Members2Service } from 'src/app/shared/services/members2/members2.service';
import { Members2ListService, MEMBERS2 } from 'src/app/shared/services/members2/members2-list.service';

@Component({
  selector: 'app-members2-list',
  templateUrl: './members2-list.component.html',
  styleUrls: ['./members2-list.component.css']
})
export class Members2ListComponent implements OnInit {

  members2Sorting = MEMBERS2;

  constructor(public members2Service: Members2Service,
              public members2ListService: Members2ListService) { }

  ngOnInit(): void {
    this.getMembers2ListInformation();
  }

  getMembers2ListInformation(){
    this.members2ListService.getMembers2ListInformation();
  }

  populateMembers2InformationForm(members2InfoData: any){
    this.members2Service.populateMembers2InformationForm(members2InfoData);
  }

  getDeactivateMembers2InfoID(members2InfoID: any){
    this.members2Service.getDeactivateMembers2InfoID(members2InfoID);

  }

  members2DeactivateAction(membersAction: boolean){
    this.members2Service.members2DeactivateAction(membersAction);
    this.members2Service.deactivateActionMembers2();
    this.members2ListService.afterClick_refreshMember2List();
  }

  members2ImageName(members2FirstName: string, members2MiddleInitial: string, members2LastName: string){
    this.members2Service.setImageName((members2FirstName+" "+members2MiddleInitial+" "+members2LastName).replace(/\s+/g, '-').toLowerCase());

  }

  getImageMembers2InfoID(members2InfoID: any){
    this.members2Service.getImageMembers2InfoID(members2InfoID);

  }

  setViewButtonClicked(){
    this.members2Service.setViewButtonClicked(true);
  }

  setUpdateButtonClicked(){
    this.members2Service.setUpdateButtonClicked(true);
  }

}
