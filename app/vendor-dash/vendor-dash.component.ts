import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-vendor-dash',
  templateUrl: './vendor-dash.component.html',
  styleUrls: ['./vendor-dash.component.css']
})
export class VendorDashComponent implements OnInit {

  vendors : Observable<Vendor[]>;
  constructor(private _service : VendorService) {
    this.vendors = this._service.showVendor();
   }

  ngOnInit(): void {
  }

}
