import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-customer-wallet',
  templateUrl: './customer-wallet.component.html',
  styleUrls: ['./customer-wallet.component.css']
})
export class CustomerWalletComponent implements OnInit {

  cowallet : Observable<Wallet[]>;
  customer1:Customer;
  constructor(private _service : CustomerService) {
    this.customer1=localStorage.getItem("customerdata")? JSON.parse(localStorage.getItem('customerdata')):[];
    this.cowallet= this._service.customerwallet(this.customer1.cus_id);
   }
 
  ngOnInit(): void {
  }

}
