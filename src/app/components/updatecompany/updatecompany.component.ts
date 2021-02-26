import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  public company:Company =  new Company();
  
  
  public nameFormControl = new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*$'),Validators.maxLength(15)]);
  public emailFormControl = new FormControl('',[Validators.required,Validators.maxLength(30)]);
  public passwordFormControl = new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]);

  public formGroup = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    password: this.passwordFormControl
  });



  constructor(private admin:AdminserviceService) { }

  ngOnInit(): void {
  }

  public updateCompany(){
  
    this.company.name = this.nameFormControl.value;
    this.company.email = this.emailFormControl.value;
    this.company.password = this.passwordFormControl.value;
    console.log(this.company);

    this.admin.updateCompany(this.company).subscribe(
      (c) => {

        console.log(c);
        alert("The company was updated");
        

      },(err)=>{

        alert("Error " + err.message);

      })


  }

}
