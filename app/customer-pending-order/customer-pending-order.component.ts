import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-customer-pending-order',
  templateUrl: './customer-pending-order.component.html',
  styleUrls: ['./customer-pending-order.component.css']
})
export class CustomerPendingOrderComponent implements OnInit {
  corders : Observable<Orders[]>;

  constructor(private _service : CustomerService) {
    this.corders = this._service.customerPendingOrder();
   }

  ngOnInit(): void {
  }

}