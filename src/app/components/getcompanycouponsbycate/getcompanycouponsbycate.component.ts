import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/enums/category';
import { Coupon } from 'src/app/models/coupon';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-getcompanycouponsbycate',
  templateUrl: './getcompanycouponsbycate.component.html',
  styleUrls: ['./getcompanycouponsbycate.component.css']
})
export class GetcompanycouponsbycateComponent implements OnInit {

  public coupons:Coupon[];

  public category:Category;
  
  public cateFormControl = new FormControl('',[Validators.required]);

  constructor(private company:CompanyserviceService) { }

  ngOnInit(): void {
  }

  public getCoupByCate(){
  
    this.category = this.cateFormControl.value;

    this.company.getCompaniesCouponsByCategory(this.category).subscribe(
      (coupo)=>{

        this.coupons = coupo;

      },(err)=>{
        alert("There are not coupons with that category " + err.message);
        this.coupons = []

      })



  }

}
