import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-customer-orderss',
  templateUrl: './customer-orderss.component.html',
  styleUrls: ['./customer-orderss.component.css']
})
export class CustomerOrderssComponent implements OnInit {

  corders : Observable<Orders[]>;

  constructor(private _service : CustomerService) {
    this.corders = this._service.customerOrder();
   }

  ngOnInit(): void {
  }
}
