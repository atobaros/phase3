import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getonecompany',
  templateUrl: './getonecompany.component.html',
  styleUrls: ['./getonecompany.component.css']
})
export class GetonecompanyComponent implements OnInit {

  public id:number;
  public company:Company;

  constructor(private admin:AdminserviceService) {
   }

  public idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);

  ngOnInit(): void {

  }

  public getOneCompany(){

    this.id = this.idFormControl.value;

    this.company = null;

 
     this.admin.getOneCompany(this.id).subscribe(
     (com)=>{
      console.log(com);
       this.company = com;
      
      console.log(this.company);
      
     },(err)=>{
       alert("Error " + err.message);
     })


  }



  

}
