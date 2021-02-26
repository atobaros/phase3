import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';
import { CustomerserviceService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-getcustomercoupbymaxprice',
  templateUrl: './getcustomercoupbymaxprice.component.html',
  styleUrls: ['./getcustomercoupbymaxprice.component.css']
})
export class GetcustomercoupbymaxpriceComponent implements OnInit {

  public coupons:Coupon[];

  public maxPrice:number;

  public priceFormControl = new FormControl('',[Validators.required,Validators.min(0.1)]);

  constructor(private customer:CustomerserviceService) { }

  ngOnInit(): void {
  }

  public getCoupByMaxPrice(){

    this.coupons = null;

    this.maxPrice = this.priceFormControl.value;

    this.customer.getCouponByMaxPrice(this.maxPrice).subscribe(
      (coup)=>{

        this.coupons = coup;

      },(err)=>{

        alert("This customer doesnt have coupons under this max price " + err.message);

      });


  }

}
