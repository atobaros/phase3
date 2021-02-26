import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientType } from '../enums/ClientType';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public clientLogin(email:string, password:string, clientType:ClientType){


    return this.httpClient.post("http://localhost:8080/login/login/" + email + "/" + password + "/" +  clientType, null, {responseType: 'text'});
		
  }

}
