import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search-dash',
  templateUrl: './customer-search-dash.component.html',
  styleUrls: ['./customer-search-dash.component.css']
})
export class CustomerSearchDashComponent implements OnInit {

  cus_id:number;
   customers : Observable<Customer>;
   search(){
     this.customers = this._service.searchCustomer(this.cus_id);
   }
   constructor(private _service : CustomerService) {
    
    }


  ngOnInit(): void {
  }

}
