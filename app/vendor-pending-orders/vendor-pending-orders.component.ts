import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-pending-orders',
  templateUrl: './vendor-pending-orders.component.html',
  styleUrls: ['./vendor-pending-orders.component.css']
})
export class VendorPendingOrdersComponent implements OnInit {

  vorders : Observable<Orders[]>;
  oid : number;
  status(ordId : number) {
  this.oid = ordId;
  alert(this.oid);
  localStorage.setItem("oid",this.oid.toString());
  this._router.navigate(['../acceptreject'], {relativeTo: this._route});
  }
  
  constructor(private _service : VendorService, private _router : Router, private _route : ActivatedRoute) {
    this.vorders = this._service.vendorPendingOrder();
   }

  ngOnInit(): void {
  }


}
