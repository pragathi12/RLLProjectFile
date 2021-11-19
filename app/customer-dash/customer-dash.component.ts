import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {

  customers : Observable<Customer[]>;
  constructor(private _service : CustomerService) {
    this.customers = this._service.showCustomer();
   }

  ngOnInit(): void {
  }

}
