import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cus-dash',
  templateUrl: './cus-dash.component.html',
  styleUrls: ['./cus-dash.component.css']
})
export class CusDashComponent implements OnInit {
  user:string
  customer : Observable<Customer>
  cust:Customer
  constructor(private _service : CustomerService) { 
    this.user = localStorage.getItem("customer")
  this._service.showCustomerInfo(this.user).subscribe
  (x=>{
    this.cust=x
    localStorage.setItem('customerdata', JSON.stringify(x));
  })
    //this.customer = this._service.showCustomerInfo(this.user)
    
   // localStorage.setItem('customerdata', JSON.stringify(this.customer));
  }


  ngOnInit(): void {
  }

}
