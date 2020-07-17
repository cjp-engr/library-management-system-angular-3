import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-forms',
  templateUrl: './member-forms.component.html',
  styleUrls: ['./member-forms.component.css'],
})
export class MemberFormsComponent implements OnInit {

  constructor(public memberService: MemberService) {}

  ngOnInit(): void {}

  stateListOfValues = [
    'Ilocos Region',
    'Cagayan Valley',
    'Central Luzon',
    'Calabarzon',
    'Bicol Region',
    'Western Visayas',
    'Central Visayas',
    'Eastern Visayas',
    'Zamboanga Peninsula',
    'Northern Mindanao',
    'Davao Region',
    'Soccsksargen',
    'National Capital Region',
    'Cordillera Administrative Region',
    'Autonomous Region In Muslim Mindanao',
    'Caraga',
    'Mimaropa',
  ];

}
