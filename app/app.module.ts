import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { VendorDashComponent } from './vendor-dash/vendor-dash.component';
import { CustomerSearchDashComponent } from './customer-search-dash/customer-search-dash.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CusDashComponent } from './cus-dash/cus-dash.component';
import { VenDashComponent } from './ven-dash/ven-dash.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';

import { CustomerPendingOrderComponent } from './customer-pending-order/customer-pending-order.component';
import { CustomerOrderssComponent } from './customer-orderss/customer-orderss.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorPendingOrdersComponent } from './vendor-pending-orders/vendor-pending-orders.component';
import { CustomerWalletComponent } from './customer-wallet/customer-wallet.component';
import { CustomerWalletTypeComponent } from './customer-wallet-type/customer-wallet-type.component';
import { CustomerPlaceOrderComponent } from './customer-place-order/customer-place-order.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuShowComponent } from './menu-show/menu-show.component';
import { AcceptRejectComponent } from './accept-reject/accept-reject.component';
import { WalletAddComponent } from './wallet-add/wallet-add.component';



const appRouts: Routes=[
  {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'home',component:HomeComponent},
      {path:'customer',component:CustomerLoginComponent},
    {path:'vendor',component:VendorLoginComponent},
    {path:'customeradd',component:CustomerAddComponent},
    {path:'vendoradd',component:VendorAddComponent},
    {path:'cusdash',component:CusDashComponent,children:[
     
      {path:'customerdash',component:CustomerDashComponent,outlet:'mphasis'},
    {path:'customersearchdash',component:CustomerSearchDashComponent,outlet:'mphasis'},
    {path:'customerinfo',component:CustomerInfoComponent,outlet:'mphasis'},
    {path:'customerorder',component:CustomerOrderssComponent,outlet:'mphasis'},
    {path:'customerpendingorder',component:CustomerPendingOrderComponent,outlet:'mphasis'},
    {path:'customerwallet',component:CustomerWalletComponent,outlet:'mphasis'},
    {path:'customerwallettype',component:CustomerWalletTypeComponent,outlet:'mphasis'},
    {path:'placeorder',component:CustomerPlaceOrderComponent,outlet:'mphasis'},
  
    {path:'walletadd',component:WalletAddComponent,outlet:'mphasis'},
   
    ]},
    {path:'vendash',component:VenDashComponent,children:[
      
    {path:'vendordash',component:VendorDashComponent,outlet:'mphasis'},
    {path:'vendorsearchdash',component:VendorSearchComponent,outlet:'mphasis'},
    {path:'vendorinfo',component:VendorInfoComponent,outlet:'mphasis'},
    {path:'vendororder',component:VendorOrdersComponent,outlet:'mphasis'},
    {path:'vendorpendingorder',component:VendorPendingOrdersComponent,outlet:'mphasis'},
   
    {path:'menushow',component:MenuShowComponent,outlet:'mphasis'},
    {path:'menuadd',component:MenuAddComponent,outlet:'mphasis'},
    {path:'acceptreject',component:AcceptRejectComponent,outlet:'mphasis'},
    ]},
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerLoginComponent,
    VendorLoginComponent,
    CustomerDashComponent,
    VendorDashComponent,

    CustomerSearchDashComponent,
    VendorSearchComponent,
    CusDashComponent,
    VenDashComponent,
    CustomerInfoComponent,
    VendorInfoComponent,
  
    CustomerPendingOrderComponent,
       CustomerOrderssComponent,
       VendorOrdersComponent,
       VendorPendingOrdersComponent,
       CustomerWalletComponent,
       CustomerWalletTypeComponent,
       CustomerPlaceOrderComponent,
       CustomerAddComponent,
       VendorAddComponent,
       MenuAddComponent,
       MenuShowComponent,
       AcceptRejectComponent,
       WalletAddComponent,
      
       
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
