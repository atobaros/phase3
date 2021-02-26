import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerserviceService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-getcustomercoupons',
  templateUrl: './getcustomercoupons.component.html',
  styleUrls: ['./getcustomercoupons.component.css']
})
export class GetcustomercouponsComponent implements OnInit {

  public coupons:Coupon[];

  constructor(private customer:CustomerserviceService) { }

  ngOnInit(): void {
  }


  public getCustomerCoupons(){

    this.customer.getCustomerCoupons().subscribe(
      (coup)=>{

        this.coupons = coup;

      },(err)=>{

        alert("this customer doesnt have coupons" + err.message);

      })

  }

}
