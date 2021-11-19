import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-ven-dash',
  templateUrl: './ven-dash.component.html',
  styleUrls: ['./ven-dash.component.css']
})
export class VenDashComponent implements OnInit {

  user:string
  vendor : Observable<Vendor>
  ven:Vendor
  constructor(private _service : VendorService) { 
    this.user = localStorage.getItem("vendor")
  this._service.showVendorInfo(this.user).subscribe
  (x=>{
    this.ven=x
    localStorage.setItem('vendordata', JSON.stringify(x));
  })
    //this.customer = this._service.showCustomerInfo(this.user)
    
   // localStorage.setItem('customerdata', JSON.stringify(this.customer));
  }


  ngOnInit(): void {
  }

}

