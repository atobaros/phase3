import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../enums/category';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private httpClient:HttpClient) { }

  public purchaseCoupon(coupon:Coupon){
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.post("http://localhost:8080/customer/purchase-coupon",coupon,{headers: theHeaders, responseType:'text'});

  }
  
  public getCustomerCoupons(){

    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/get-customer-coupons", options);

  }
  
  public getCustomerCouponsByCategory(category:Category){
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/get-customer-by-category/" + category, options);

  }

  public getCouponByMaxPrice(price:number){

    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/get-customer-coupons-maxprice/" + price, options);
  
  }

  public getCustomerDetails(){

    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token'));
    const options = {headers: theHeaders};

    return this.httpClient.get("http://localhost:8080/customer/get-customer-details", options);

  }

  public logOut(token:string){
    
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token',localStorage.getItem('token'));
    const options = {headers:theHeaders};

    return this.httpClient.post("http://localhost:8080/customer/logout/" + token,null, options);
  }  
}
