import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getallcompanies',
  templateUrl: './getallcompanies.component.html',
  styleUrls: ['./getallcompanies.component.css']
})
export class GetallcompaniesComponent implements OnInit {

  public companies: Company[];
  public company: Company;
  
  constructor(private admin:AdminserviceService) { 
    this.getAllCompanies();
  }

  ngOnInit(): void {
    this.getAllCompanies();

  }

  public getAllCompanies() {

    this.companies = null;

    this.admin.getAllCompanies().subscribe(
      (companies) => {

      this.companies = companies;


    }, (err) => {
      if(this.companies!=null){
      alert("error " + err.message);
      this.companies = [];
      }
    });
  }

  public editCompany(id:number) {
    console.log(id);
    this.company = this.companies.filter((company) => company.id==id)[0];
    document.getElementById(`pass${this.company.id}`).removeAttribute("disabled");
    document.getElementById(`email${this.company.id}`).removeAttribute("disabled");
    document.getElementById(`edit-btn${this.company.id}`).style.display = "none";
    document.getElementById(`save-btn${this.company.id}`).style.display = "block";
  }

  public saveCompany() {
    let company = this.company;
    let changeFlag = false;
    let passInput = document.getElementById(`pass${this.company.id}`);
    let emailInput = document.getElementById(`email${this.company.id}`);
    document.getElementById(`edit-btn${company.id}`).style.display = "block";
    document.getElementById(`save-btn${company.id}`).style.display = "none";
    passInput.setAttribute("disabled","");
    emailInput.setAttribute("disabled","");
    let newpass = (<HTMLInputElement>passInput).value;
    let newemail = (<HTMLInputElement>emailInput).value;
    console.log(newpass,company.password);
    console.log(newemail,company.email);
    if(company.email!=newemail) {
      company.email = newemail;
      changeFlag = true;
    }
    if(company.password!=newpass) {
      company.password = newpass;
      changeFlag = true;
    }

    if(changeFlag) {
      this.updateCompany();
    }



  }

  public updateCompany(){
    this.admin.updateCompany(this.company).subscribe(
      (c) => {
        alert("The company was updated");
      },(err)=>{

        alert("Error " + err.message);

      })


  }



  public deleteCompany(id:number){
    
    console.log(id);

    if (confirm('Are you sure you want to delete company?')) {
      // Save it!
      this.admin.deleteCompany(id).subscribe(
        (com)=>{
          alert("company with id: " +id+ " was deleted" )
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
