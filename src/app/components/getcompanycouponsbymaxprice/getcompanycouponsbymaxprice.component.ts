import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-getcompanycouponsbymaxprice',
  templateUrl: './getcompanycouponsbymaxprice.component.html',
  styleUrls: ['./getcompanycouponsbymaxprice.component.css']
})
export class GetcompanycouponsbymaxpriceComponent implements OnInit {

  public coupons:Coupon[];

  public maxPrice:number;

  public priceFormControl = new FormControl('',[Validators.required,Validators.min(0.1)]);

  constructor(private company:CompanyserviceService) { }

  ngOnInit(): void {
  }

  public getCoupByMaxPrice(){

    this.coupons = null;

    this.maxPrice = this.priceFormControl.value;

    this.company.getCompaniesCouponsByMaxPrice(this.maxPrice).subscribe(
      (coup)=>{

        this.coupons = coup;

      },(err)=>{

        alert("There are not coupons under this max price " + err.message);

      });


  }

}
