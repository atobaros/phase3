import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyserviceService } from 'src/app/services/company.service';

@Component({
  selector: 'app-getcompanydetails',
  templateUrl: './getcompanydetails.component.html',
  styleUrls: ['./getcompanydetails.component.css']
})
export class GetcompanydetailsComponent implements OnInit {

  public companyDetails:Company;

  constructor(private company:CompanyserviceService) {
    this.getCompanyDetails();

   }

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  public getCompanyDetails(){

    this.company.getCompanyDetails().subscribe(
      (comp)=>{

        this.companyDetails = comp;

      },(err)=>{

        alert("Can not show company details " + err.message);

      });



  }

}
