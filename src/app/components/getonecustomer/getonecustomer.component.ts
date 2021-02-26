import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getonecustomer',
  templateUrl: './getonecustomer.component.html',
  styleUrls: ['./getonecustomer.component.css']
})
export class GetonecustomerComponent implements OnInit {

  public id:number;
  public customer:Customer;

  public idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(1)]);

  constructor(private admin:AdminserviceService) { }

  ngOnInit(): void {
  }

  public getOneCustomer(){

    this.id = this.idFormControl.value;

    this.customer = null;
    
    this.admin.getOneCustomer(this.id).subscribe(
      (cust)=>{
         this.customer = cust;
         console.log(cust);
         
      },(err)=>{

        alert("Error " + err.message);

      })

  }

}
