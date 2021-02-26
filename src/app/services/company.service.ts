import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../enums/Category';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private httpClient:HttpClient) { }


  public  addCoupon(coupon:Coupon){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.post("http://localhost:8080/company/add-coupon",coupon,{headers: theHeaders, responseType:'text'});

  }

  public updateCoupon(coupon:Coupon){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.put("http://localhost:8080/company/update-coupon", coupon, options);

  }

  public deleteCoupon(id:number){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.delete("http://localhost:8080/company/delete-coupon/" + id ,options);

  }

  public getCompaniesCoupons():Observable <Coupon[]>{
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/get-all-company-coupons", options);

  }

  public getCompaniesCouponsByCategory(category:Category):Observable <Coupon[]>{
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/get-company-coupons-by-category/" + category, options);

  }

  public getCompaniesCouponsByMaxPrice(price:number):Observable <Coupon[]>{
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/get-compay-coupons-max-price/" + price, options);

  }

  public getCompanyDetails(){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get("http://localhost:8080/company/get-compay-details", options);

  }

  public logOut(token:string){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers:theHeaders};

    return this.httpClient.post("http://localhost:8080/company/logout/" + token,null, options);
  }  



}
