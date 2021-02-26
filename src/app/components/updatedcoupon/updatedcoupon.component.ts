import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/enums/category';
import { Coupon } from 'src/app/models/coupon';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-updatedcoupon',
  templateUrl: './updatedcoupon.component.html',
  styleUrls: ['./updatedcoupon.component.css']
})
export class UpdatedcouponComponent implements OnInit {

  public coupon: Coupon = new Coupon();
  

  public idFormControl = new FormControl('',[Validators.required,Validators.min(1)]);
  public cateFormControl = new FormControl('',[Validators.required]);
  public titleFormControl = new FormControl('',[Validators.required,Validators.maxLength(20)]);
  public descriptionFormControl = new FormControl('',[Validators.required,Validators.maxLength(20)]);
  public startDateFormControl = new FormControl('',[Validators.required]);
  public endDateFormControl = new FormControl('',[Validators.required]);
  public amountFormControl = new FormControl('',[Validators.required,Validators.min(1),Validators.pattern("^[0-9]*$")]);
  public priceFormControl = new FormControl('',[Validators.required,Validators.min(0.1)]);
  public imageFormControl = new FormControl('',[Validators.required]);

  public formGroup = new FormGroup({
    
    id:this.idFormControl,
    cate: this.cateFormControl,
    title: this.titleFormControl,
    description: this.descriptionFormControl,
    startDate: this.startDateFormControl,
    endDate: this.endDateFormControl,
    amount: this.amountFormControl,
    price: this.priceFormControl,
    image: this.imageFormControl
  });

  constructor(private company:CompanyserviceService) { }

  ngOnInit(): void {
  }

  public updateCoupon() {
   
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


    this.company.updateCoupon(this.coupon).subscribe(
      (coup) => {
        alert("coupon updated");
        console.log(coup);


      }, (err) => {

        alert("Error " + err.message);

      })


  }


}
