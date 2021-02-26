import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { AddcouponComponent } from './components/addcoupon/addcoupon.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AsideComponent } from './components/aside/aside.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DeletecompanyComponent } from './components/deletecompany/deletecompany.component';
import { DeletecouponComponent } from './components/deletecoupon/deletecoupon.component';
import { DeletecustomerComponent } from './components/deletecustomer/deletecustomer.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetallcompaniesComponent } from './components/getallcompanies/getallcompanies.component';
import { GetallcompanycoupoComponent } from './components/getallcompanycoupo/getallcompanycoupo.component';
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component';
import { GetcompanycouponsbycateComponent } from './components/getcompanycouponsbycate/getcompanycouponsbycate.component';
import { GetcompanycouponsbymaxpriceComponent } from './components/getcompanycouponsbymaxprice/getcompanycouponsbymaxprice.component';
import { GetcompanydetailsComponent } from './components/getcompanydetails/getcompanydetails.component';
import { GetcustomercoupbycategComponent } from './components/getcustomercoupbycateg/getcustomercoupbycateg.component';
import { GetcustomercoupbymaxpriceComponent } from './components/getcustomercoupbymaxprice/getcustomercoupbymaxprice.component';
import { GetcustomercouponsComponent } from './components/getcustomercoupons/getcustomercoupons.component';
import { GetcustomerdetailsComponent } from './components/getcustomerdetails/getcustomerdetails.component';
import { GetonecompanyComponent } from './components/getonecompany/getonecompany.component';
import { GetonecustomerComponent } from './components/getonecustomer/getonecustomer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { PurchasecouponComponent } from './components/purchasecoupon/purchasecoupon.component';
import { UpdatecompanyComponent } from './components/updatecompany/updatecompany.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { UpdatedcouponComponent } from './components/updatedcoupon/updatedcoupon.component';
import { AutheticationService } from './services/authetication.service';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "header", component: HeaderComponent },
  { path: "aside", component: AsideComponent },
  { path: "footer", component: FooterComponent },
  {
    path: "admin",component: AdminComponent, children: [
      { path: "addCompany", component: AddcompanyComponent },
      { path: "updateCompany", component: UpdatecompanyComponent },
      { path: "deleteCompany", component: DeletecompanyComponent },
      { path: "getAllCompanies", component: GetallcompaniesComponent },
      { path: "getOneCompany", component: GetonecompanyComponent },
      { path: "addCustomer", component: AddcustomerComponent },
      { path: "updateCustomer", component:UpdatecustomerComponent},
      { path: "deleteCustomer", component:DeletecustomerComponent},
      { path: "getAllCustomers", component:GetallcustomersComponent},
      { path: "getOneCustomer", component:GetonecustomerComponent},
    ]
  },


  { 
    path: "company", component: CompanyComponent, children: [
      { path: "addCoupon",component:AddcouponComponent},
      { path: "updateCoupon",component:UpdatedcouponComponent},
      { path: "deleteCoupon", component:DeletecouponComponent},
      { path: "getAllCompanyCoupons", component:GetallcompanycoupoComponent},
      { path: "getCompanyCoupByCate", component:GetcompanycouponsbycateComponent},
      { path: "getCompanyCoupByMaxPrice", component:GetcompanycouponsbymaxpriceComponent},
      { path: "getCompanyDetails", component:GetcompanydetailsComponent},
      

    ]
  },

  { 
    path: "customer", component: CustomerComponent, children:[
      { path: "purchaseCoupon", component:PurchasecouponComponent},
      { path: "getCustomerCoup", component:GetcustomercouponsComponent},
      { path: "getCustomerCoupByCate", component:GetcustomercoupbycategComponent},
      { path: "getCustomerCoupByMaxPrice", component:GetcustomercoupbymaxpriceComponent},
      { path: "customerDetails", component:GetcustomerdetailsComponent},

    ]
  },

  { path: "app", component: AppComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
