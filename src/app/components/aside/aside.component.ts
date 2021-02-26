import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public login(){
    this.router.navigate(['login']);
  }

}
