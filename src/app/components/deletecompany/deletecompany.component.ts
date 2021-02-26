import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.css']
})
export class DeletecompanyComponent implements OnInit {

  companyId:number;

  public idFormControl = new FormControl('',[Validators.required,Validators.pattern("^[0-9].*$")]);

  constructor(private admin:AdminserviceService) { }

  public deleteCompany(){
    this.companyId = this.idFormControl.value;
    console.log(this.companyId);
    

    this.admin.deleteCompany(this.companyId).subscribe(
      (com)=>{
        alert("company with id: " +com+ " was deleted" )
        console.log(com);
        
      },(err)=>{
        alert("Error " + err.message)
      });

     

  }

  ngOnInit(): void {
  }

}
