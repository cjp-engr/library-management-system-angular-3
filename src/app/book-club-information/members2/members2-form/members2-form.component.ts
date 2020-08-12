import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Members2Service } from 'src/app/shared/services/members2/members2.service';

@Component({
  selector: 'app-members2-form',
  templateUrl: './members2-form.component.html',
  styleUrls: ['./members2-form.component.css']
})
export class Members2FormComponent implements OnInit {
  inputDateOfBirth: NgbDateStruct;
  inputDateApplied: NgbDateStruct;
  disabled:boolean = true;


  constructor(public members2Service: Members2Service) {

   }

  ngOnInit(): void {

  }

}
