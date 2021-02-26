import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

customer:Customer = new Customer();  


public nameFormControl = new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*$'),Validators.maxLength(15)]);
public lastNameFormControl = new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*$'),Validators.maxLength(15)]);
public emailFormControl = new FormControl('',[Validators.required,Validators.maxLength(30)]);
public passwordFormControl = new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]);

public formGroup = new FormGroup({
  name:this.nameFormControl,
  lastName:this.lastNameFormControl,
  email:this.emailFormControl,
  password:this.passwordFormControl 
});

  constructor(private admin:AdminserviceService) {
   
  }


   public addCustomer(){

    this.customer.firstName = this.nameFormControl.value;
    this.customer.lastName = this.lastNameFormControl.value;
    this.customer.email = this.emailFormControl.value;
    this.customer.password = this.passwordFormControl.value;
    console.log(this.customer);
    

      this.admin.addCustomer(this.customer).subscribe(
        (cust)=>{
          console.log(cust);
          alert("customer " + this.customer.firstName + " was added")
        },(err)=>{
            alert("error " + err.message);
          })

   }






  ngOnInit(): void {
  }

}
