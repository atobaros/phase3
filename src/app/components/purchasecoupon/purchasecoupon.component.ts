import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';
import { CustomerserviceService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-purchasecoupon',
  templateUrl: './purchasecoupon.component.html',
  styleUrls: ['./purchasecoupon.component.css']
})
export class PurchasecouponComponent implements OnInit {
  public coupon: Coupon = new Coupon();

  public idFormControl = new FormControl('',[Validators.required,Validators.min(1)]);
  public titleFormControl = new FormControl('',[Validators.required,Validators.maxLength(20)]);
  public cateFormControl = new FormControl('',[Validators.required]);
  public descriptionFormControl = new FormControl('',[Validators.required,Validators.maxLength(20)]);
  public startDateFormControl = new FormControl('',[Validators.required]);
  public endDateFormControl = new FormControl('',[Validators.required]);
  public amountFormControl = new FormControl('',[Validators.required,Validators.min(1),Validators.pattern("^[0-9]*$")]);
  public priceFormControl = new FormControl('',[Validators.required,Validators.min(0.1)]);
  public imageFormControl = new FormControl('',[Validators.required]);


  public formGroup = new FormGroup({
    id: this.idFormControl,
    cate: this.cateFormControl,
    title: this.titleFormControl,
    description: this.descriptionFormControl,
    startDate: this.startDateFormControl,
    endDate: this.endDateFormControl,
    amount: this.amountFormControl,
    price: this.priceFormControl,
    image: this.imageFormControl
  });

  constructor(private customer:CustomerserviceService) { }

  ngOnInit(): void {
  }

  public purchaseCoupon(){
    this.coupon.id = this.idFormControl.value;
    this.coupon.category = this.cateFormControl.value;
    this.coupon.title = this.titleFormControl.value;
    this.coupon.description = this.descriptionFormControl.value;
    this.coupon.startDate = this.startDateFormControl.value;
    this.coupon.endDate = this.endDateFormControl.value;
    this.coupon.amount = this.amountFormControl.value;
    this.coupon.price = this.priceFormControl.value;
    this.coupon.image = this.imageFormControl.value;
    console.log(this.coupon);

    this.customer.purchaseCoupon(this.coupon).subscribe(
      (coup)=>{
        alert(" thanks for buying the coupon " + this.coupon.title)
        console.log(coup);
        
      },(err)=>{
      alert("Error " + err.message);
       
      });

  }

}
