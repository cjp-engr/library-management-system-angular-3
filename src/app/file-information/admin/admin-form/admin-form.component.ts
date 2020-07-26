import { Component, OnInit } from '@angular/core';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  inputDateOfBirthModel: NgbDateStruct;
  inputHireDateModel: NgbDateStruct;

  constructor() {}
   
  ngOnInit(): void {
  }


}
