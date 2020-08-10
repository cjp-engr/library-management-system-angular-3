import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-members2-form',
  templateUrl: './members2-form.component.html',
  styleUrls: ['./members2-form.component.css']
})
export class Members2FormComponent implements OnInit {
  inputDateOfBirthModel: NgbDateStruct;
  inputDateAppliedModel: NgbDateStruct;
  pansamantala: any;

  constructor() { }

  ngOnInit(): void {
  }

}
