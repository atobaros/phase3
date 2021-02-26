import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/enums/category';
import { Coupon } from 'src/app/models/coupon';
import { CustomerserviceService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-getcustomercoupbycateg',
  templateUrl: './getcustomercoupbycateg.component.html',
  styleUrls: ['./getcustomercoupbycateg.component.css']
})
export class GetcustomercoupbycategComponent implements OnInit {

  public coupons:Coupon[];

  public category:Category;

  public cateFormControl = new FormControl('',[Validators.required]);

  constructor(private customer:CustomerserviceService) { }

  public getCoupByCate(){
  
    this.category = this.cateFormControl.value;

    this.customer.getCustomerCouponsByCategory(this.category).subscribe(
      (coupo)=>{

        this.coupons = coupo;

      },(err)=>{
        alert("The customer doesnt have coupons with that category " + err.message);
        this.coupons = []

      })
  }

  ngOnInit(): void {
  }

}
