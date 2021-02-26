import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientType } from '../enums/ClientType';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  logOut(token: string){
    return this.httpClient.post("http://localhost:8080/login/log-out/" + token, null, {responseType: 'text'});
  }

		
  }


