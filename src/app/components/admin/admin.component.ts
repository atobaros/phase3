import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private admin:AdminserviceService, private router:Router) { }

  ngOnInit(): void {
    
  }

  logout(){
  this.admin.logOut(localStorage.getItem('token')).subscribe(
    (token)=>{
      console.log(token);
    },(err)=>{
      console.log(err);
           this.router.navigate(['login']); 

    });

  }



  

  
  

}
