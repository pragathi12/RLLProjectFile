import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-customer-wallet-type',
  templateUrl: './customer-wallet-type.component.html',
  styleUrls: ['./customer-wallet-type.component.css']
})
export class CustomerWalletTypeComponent implements OnInit {

  customer1:Customer;
  wal_src:string;
  isFormSubmitted : boolean;
  wallet : Observable<Wallet>;
  search(searchForm:NgForm){
    if (searchForm.invalid) {
      return;
    }
    this.isFormSubmitted = true;
    this.wallet = this._service.customerSearchWallet(this.customer1.cus_id,this.wal_src);
  }

  constructor(private _service : CustomerService) {
    this.wal_src="";
    this.isFormSubmitted=false;
    this.customer1=localStorage.getItem("customerdata")? JSON.parse(localStorage.getItem('customerdata')):[];
   }

  ngOnInit(): void {
  }
}
