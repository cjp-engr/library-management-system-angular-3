import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';
import { Member } from 'src/app/shared/model/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})


export class MemberListComponent implements OnInit {


  constructor(private memberService: MemberService) { }
/* 
  ngOnInit() {this.getCoffeeOrders();}
  ...  coffeeOrders;   getCoffeeOrders = () =>
        this.ordersService
        .getCoffeeOrders()
        .subscribe(res =>(this.coffeeOrders = res));
         */
  ngOnInit(){
    this.getMemberInformation();
  }

  memberInformation: any;

  getMemberInformation = () =>
    this.memberService
    .getMemberInformation()
    .subscribe((res: any) =>(this.memberInformation = res));

}
