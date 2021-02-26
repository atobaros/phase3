import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpClient:HttpClient) { }

 
  public addCompany(company:Company){
    // const headers = {'token':localStorage.getItem('token')};
    // const options = {headers: new HttpHeaders(headers)};
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    var options = {headers: theHeaders, responseType:'text'};
     
    return this.httpClient.post("http://localhost:8080/admin/add-company",company,{headers: theHeaders, responseType:'text'});
  }
  

  public updateCompany(company:Company): Observable<Company>{
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};
    
    return this.httpClient.put<Company>("http://localhost:8080/admin/update-company", company, options);
  }

  public deleteCompany(id:number){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.delete("http://localhost:8080/admin/delete-company/" + id ,options);
  }

  public getAllCompanies(): Observable<Company[]>{

    const headers = {'token':localStorage.getItem('token')};
    const options = {headers: new HttpHeaders(headers)};
    

    return this.httpClient.get<Company[]>("http://localhost:8080/admin/get-all-companies", options);
  }


  public getOneCompany(id:number){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers:theHeaders};

    return this.httpClient.get("http://localhost:8080/admin/get-one-company/" + id , options);
     

  }

  public addCustomer(customer:Customer){

    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders, responseType:'text'};
     
    return this.httpClient.post("http://localhost:8080/admin/add-customer",customer,{headers: theHeaders, responseType:'text'});
  }

  public updateCustomer(customer:Customer){
   
    let theHeaders:HttpHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers: theHeaders, responseType:'text'};

    return this.httpClient.put("http://localhost:8080/admin/update-customer",customer, {headers: theHeaders, responseType:'text'})
  


  }

  public deleteCustomer(id:number){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.delete("http://localhost:8080/admin/delete-customer/" + id ,options);
  }

  public getAllCustomers(): Observable<Customer[]>{

    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};
    

    return this.httpClient.get<Customer[]>("http://localhost:8080/admin/get-all-customers", options);
  }


  public getOneCustomer(id:number){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers:theHeaders};

    return this.httpClient.get("http://localhost:8080/admin/get-one-customer/" + id , options);
     

  }
  public logOut(token:string){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers:theHeaders};

    return this.httpClient.post("http://localhost:8080/admin/logout/" + token,null, options);
  }  


}
