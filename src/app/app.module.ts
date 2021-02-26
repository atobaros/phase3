import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { GetallcompaniesComponent } from './components/getallcompanies/getallcompanies.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { UpdatecompanyComponent } from './components/updatecompany/updatecompany.component';
import { DeletecompanyComponent } from './components/deletecompany/deletecompany.component';
import { GetonecompanyComponent } from './components/getonecompany/getonecompany.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { DeletecustomerComponent } from './components/deletecustomer/deletecustomer.component';
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component';
import { GetonecustomerComponent } from './components/getonecustomer/getonecustomer.component';
import { AddcouponComponent } from './components/addcoupon/addcoupon.component';
import { UpdatedcouponComponent } from './components/updatedcoupon/updatedcoupon.component';
import { DeletecouponComponent } from './components/deletecoupon/deletecoupon.component';
import { GetallcompanycoupoComponent } from './components/getallcompanycoupo/getallcompanycoupo.component';
import { GetcompanycouponsbycateComponent } from './components/getcompanycouponsbycate/getcompanycouponsbycate.component';
import { GetcompanycouponsbymaxpriceComponent } from './components/getcompanycouponsbymaxprice/getcompanycouponsbymaxprice.component';
import { GetcompanydetailsComponent } from './components/getcompanydetails/getcompanydetails.component';
import { PurchasecouponComponent } from './components/purchasecoupon/purchasecoupon.component';
import { GetcustomercouponsComponent } from './components/getcustomercoupons/getcustomercoupons.component';
import { GetcustomercoupbycategComponent } from './components/getcustomercoupbycateg/getcustomercoupbycateg.component';
import { GetcustomercoupbymaxpriceComponent } from './components/getcustomercoupbymaxprice/getcustomercoupbymaxprice.component';
import { GetcustomerdetailsComponent } from './components/getcustomerdetails/getcustomerdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    Page404Component,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    GetallcompaniesComponent,
    AddcompanyComponent,
    UpdatecompanyComponent,
    DeletecompanyComponent,
    GetonecompanyComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    DeletecustomerComponent,
    GetallcustomersComponent,
    GetonecustomerComponent,
    AddcouponComponent,
    UpdatedcouponComponent,
    DeletecouponComponent,
    GetallcompanycoupoComponent,
    GetcompanycouponsbycateComponent,
    GetcompanycouponsbymaxpriceComponent,
    GetcompanydetailsComponent,
    PurchasecouponComponent,
    GetcustomercouponsComponent,
    GetcustomercoupbycategComponent,
    GetcustomercoupbymaxpriceComponent,
    GetcustomerdetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
