import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getallcustomers',
  templateUrl: './getallcustomers.component.html',
  styleUrls: ['./getallcustomers.component.css']
})
export class GetallcustomersComponent implements OnInit {
public customer:Customer;
 customers:Customer[];


  constructor(private admin:AdminserviceService) {
    this.getAllCustomers();
   }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  public getAllCustomers(){

    this.customers = null;


  this.admin.getAllCustomers().subscribe(
    (cust)=>{
      
    this.customers = cust;

   
    },(err)=>{
      if(this.customers!=null){

      alert("error" + err.message);
      this.customers= [];
      }
    })
  }

  public editCustomer(id:number) {
    console.log(id);
    this.customer = this.customers.filter((customer) => customer.id==id)[0];
    document.getElementById(`first${this.customer.id}`).removeAttribute("disabled");
    document.getElementById(`last${this.customer.id}`).removeAttribute("disabled");
    document.getElementById(`pass${this.customer.id}`).removeAttribute("disabled");
    document.getElementById(`email${this.customer.id}`).removeAttribute("disabled");
    document.getElementById(`edit-btn${this.customer.id}`).style.display = "none";
    document.getElementById(`save-btn${this.customer.id}`).style.display = "block";
  }

  public saveCompany() {
    let customer = this.customer;
    let changeFlag = false;
    let firstInput = document.getElementById(`first${this.customer.id}`);
    let lastInput = document.getElementById(`last${this.customer.id}`); 
    let passInput = document.getElementById(`pass${this.customer.id}`);
    let emailInput = document.getElementById(`email${this.customer.id}`);
    document.getElementById(`edit-btn${customer.id}`).style.display = "block";
    document.getElementById(`save-btn${customer.id}`).style.display = "none";
    firstInput.setAttribute("disabled","");
    lastInput.setAttribute("disabled","");
    passInput.setAttribute("disabled","");
    emailInput.setAttribute("disabled","");
    let newfirst = (<HTMLInputElement>firstInput).value;
    let newlast = (<HTMLInputElement>lastInput).value;
    let newpass = (<HTMLInputElement>passInput).value;
    let newemail = (<HTMLInputElement>emailInput).value;
    console.log(newpass,customer.password);
    console.log(newemail,customer.email);
    if(customer.email!=newemail) {
      customer.email = newemail;
      changeFlag = true;
    }
    if(customer.firstName!=newfirst) {
      customer.firstName = newfirst;
      changeFlag = true;
    }
    if(customer.lastName!=newlast) {
      customer.lastName = newlast;
      changeFlag = true;
    }
    if(customer.password!=newpass) {
      customer.password = newpass;
      changeFlag = true;
    }

    if(changeFlag) {
      this.updateCustomer();
    }



  }

  public updateCustomer(){

    console.log(this.customer);
    

    this.admin.updateCustomer(this.customer).subscribe(
      (custo)=>{
      console.log(custo);
      alert("customer " + this.customer.firstName + " was updated");
      
      },(err)=>{
        
        alert("Error " + err.message);
              
      })



  }
  
    public deleteCustomer(id:number){
      
      console.log(id);
  
      if (confirm('Are you sure you want to delete customer?')) {
        // Save it!
        this.admin.deleteCustomer(id).subscribe(
          (com)=>{
            alert("customer with id: " +id+ " was deleted" )
            console.log(com);
            this.ngOnInit();
            
          },(err)=>{
            alert("Error " + err.message)
          });      console.log('Deleted');
  
      } else {
        // Do nothing!
        console.log('Nothing happend.');
      }
  
       
  
    }

  }


