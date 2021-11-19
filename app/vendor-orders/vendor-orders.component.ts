import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.css']
})
export class VendorOrdersComponent implements OnInit {

  vorders : Observable<Orders[]>;

  constructor(private _service : VendorService) {
    this.vorders = this._service.vendorOrder();
   }

  ngOnInit(): void {
  }

}
