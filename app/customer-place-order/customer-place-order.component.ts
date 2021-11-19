import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Orders } from '../orders';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-customer-place-order',
  templateUrl: './customer-place-order.component.html',
  styleUrls: ['./customer-place-order.component.css']
})
export class CustomerPlaceOrderComponent implements OnInit {
 cus:Customer;
 orderdetails:Orders;
 menu:Observable<Menu[]>;
 menufound:Menu;
 price:number;
 vendor:Observable<Vendor[]>;
 wallet:Observable<Wallet[]>;
 msg:string;
 placeOrder() {
  
  this.orderdetails.ord_billamt= this.orderdetails.ord_qt*this.price;
  this._customerService.placeOrder(this.orderdetails).subscribe(x => {
    this.msg = x;
    alert(this.msg);
  })
  alert("ok");
 
}
  constructor(private _menuService:MenuService, private _vendorService:VendorService, private _customerService:CustomerService) {
    this.orderdetails= new Orders();
    this.cus = localStorage.getItem('customerdata')?JSON.parse(localStorage.getItem('customerdata')):[];
    alert(this.cus.cus_id);
    this.orderdetails.cus_id=this.cus.cus_id;
    this.menu=this._menuService.showMenu();
    this.vendor= this._vendorService.showVendor();
    this.wallet= this._customerService.customerwallet(this.cus.cus_id);

   }
   showAmount(){
    alert(this.orderdetails.men_id);
    this._menuService.searchMenu(this.orderdetails.men_id).subscribe(x => {
      this.menufound = x;
      this.price= x.men_price;
    });
   }
   getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  ngOnInit(): void {
  }

}
