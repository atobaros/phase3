import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AdminserviceService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  customer:Customer = new Customer();
  
  public idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9].*$")]);
  public nameFormControl = new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*$'),Validators.maxLength(15)]);
  public lastNameFormControl = new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*$'),Validators.maxLength(15)]);
  public emailFormControl = new FormControl('',[Validators.required,Validators.maxLength(30)]);
  public passwordFormControl = new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]);

  public formGroup = new FormGroup({
    id:this.idFormControl,
    name:this.nameFormControl,
    lastName:this.lastNameFormControl,
    email:this.emailFormControl,
    password:this.passwordFormControl
  });

  constructor(private admin:AdminserviceService) { }

  ngOnInit(): void {
  }

  public updateCustomer(){

    this.customer.id = this.idFormControl.value;
    this.customer.firstName = this.nameFormControl.value;
    this.customer.lastName = this.lastNameFormControl.value;
    this.customer.email = this.emailFormControl.value;
    this.customer.password = this.passwordFormControl.value;
    console.log(this.customer);
    

    this.admin.updateCustomer(this.customer).subscribe(
      (custo)=>{
      console.log(custo);
      alert("customer " + this.customer.firstName + " was updated");
      
      },(err)=>{
        
        alert("Error " + err.message);
              
      })



  }

}
