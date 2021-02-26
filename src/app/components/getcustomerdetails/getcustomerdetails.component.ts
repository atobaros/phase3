import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerserviceService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-getcustomerdetails',
  templateUrl: './getcustomerdetails.component.html',
  styleUrls: ['./getcustomerdetails.component.css']
})
export class GetcustomerdetailsComponent implements OnInit {

  customerDetails:Customer;


  constructor(private customer:CustomerserviceService) { }

  ngOnInit(): void {
  }

  public getCustomerDetails(){

    this.customer.getCustomerDetails().subscribe(
      (cust)=>{

        this.customerDetails = cust;

      },(err)=>{

        alert("Can not show customer's details " + err.message);

      });



  }

}
