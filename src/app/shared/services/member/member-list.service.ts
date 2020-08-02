import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMember } from '../../interface/member';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

export const MEMBERINFORMATION: IMember[] = [];

export type SortColumn = keyof IMember | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortableMemberList]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeaderMemberList {

  @Input() sortableMemberList: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortableMemberList, direction: this.direction});
  }
}

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(private firestore: AngularFirestore) {}

  getMemberInformation() {
    return this.firestore
      .collection('members')
      .snapshotChanges().subscribe(res => res.map((a)=>{

        const memberInformation: IMember = {
          inputFirstName: a.payload.doc.get('inputFirstName'),
          inputLastName: a.payload.doc.get('inputLastName'),
          inputAge: a.payload.doc.get('inputAge'),
          inputGender: a.payload.doc.get('inputGender'),
          inputStatus: a.payload.doc.get('inputStatus'),
          inputEmail: a.payload.doc.get('inputEmail'),
          inputMobileNumber: a.payload.doc.get('inputMobileNumber'),
          inputAddress: a.payload.doc.get('inputAddress'),
          inputCity: a.payload.doc.get('inputCity'),
          inputState: a.payload.doc.get('inputState'),
          inputZip: a.payload.doc.get('inputZip'),
          inputDateAndTimeAdded: a.payload.doc.get('inputDateAndTimeAdded'),
          memberInfoData: a.payload.doc.data(),
          memberID: a.payload.doc.id
        };

        MEMBERINFORMATION.push(memberInformation);

      }))
     
  }

  afterClick_refreshMemberList(){
    while(MEMBERINFORMATION.length != 0){
      MEMBERINFORMATION.pop();
    }
  }
}
