import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-getallcompanycoupo',
  templateUrl: './getallcompanycoupo.component.html',
  styleUrls: ['./getallcompanycoupo.component.css']
})
export class GetallcompanycoupoComponent implements OnInit {

  public coupons:Coupon[];

  constructor(private company:CompanyserviceService) { 
    this.getAllCompanyCoupons();

  }

  ngOnInit(): void {
    this.getAllCompanyCoupons();

  }

  public getAllCompanyCoupons(){

    this.coupons = null;

    this.company.getCompaniesCoupons().subscribe(
      (coup)=>{

        this.coupons = coup;

      },(err)=>{
        alert("Error " + err.message);

        this.coupons = [];

      })


  }

}
