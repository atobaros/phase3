import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientType } from 'src/app/enums/ClientType';
import { AutheticationService } from 'src/app/services/authetication.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  clientName: string;
  clientPassword: string;
  clientType: ClientType;


  ngOnInit(): void {
  }

  public login(){

    this.loginService.clientLogin(this.clientName, this.clientPassword, this.clientType).subscribe(
      (token)=>{
        if(this.clientType == 'ADMINISTRATOR' ){
          console.log(token);
          localStorage.setItem('token', token);
          alert("Welcome Admin")
          this.router.navigate(['admin']);
        }
        if(this.clientType == 'COMPANY'){
          console.log(token);
          localStorage.setItem('token', token)
          alert("Welcome Company")
          this.router.navigate(['company']);
        }
        if(this.clientType == 'CUSTOMER'){
          console.log(token);
          localStorage.setItem('token', token)
          alert("Welcome Customer")
          this.router.navigate(['customer']);
        }
      },
      (err)=>{
        alert(err.message);

      });




  }





}
