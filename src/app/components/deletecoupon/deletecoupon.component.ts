import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-deletecoupon',
  templateUrl: './deletecoupon.component.html',
  styleUrls: ['./deletecoupon.component.css']
})
export class DeletecouponComponent implements OnInit {

  couponId:number;

  idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9].*$")]);

  constructor(private company:CompanyserviceService) { }

  ngOnInit(): void {
  }

  public deleteCoupon(){
 
    this.couponId = this.idFormControl.value;
    console.log(this.couponId);
    

    this.company.deleteCoupon(this.couponId).subscribe(
      (cou)=>{

        alert("coupon deleted");
        console.log(cou);
        


      },(err)=>{

        alert("Error " + err.message);

      })


  }

}
