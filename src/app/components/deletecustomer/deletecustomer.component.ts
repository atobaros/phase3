import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {

  id:number;

  public idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9].*$")]);

  constructor(private admin:AdminserviceService) { }

  ngOnInit(): void {
  }

  public deleteCustomer(){

    this.id = this.idFormControl.value;
    console.log(this.id);
    
  
   this.admin.deleteCustomer(this.id).subscribe(
     (cust)=>{
      
      console.log(cust);
      alert("customer with id: " + this.id + " was deleted");
     
     },(err)=>{

      alert("Error " + err.message);

     }) 


  }

}
