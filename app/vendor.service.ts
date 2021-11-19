import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import { Vendor } from './vendor';
import { Orders } from './orders';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vuser:string;

  vendor1 : Vendor
  constructor(private _http : Http) {
    this.vuser = localStorage.getItem("vendor")
    this.vendor1 = localStorage.getItem('vendordata')? JSON.parse(localStorage.getItem('vendordata')):[];
   }

  isAuthenticated(username:string,password:string) : Observable<string> {
    return this._http.get("http://localhost:8080/vendorAuthenticate/"+username+"/"+password)
    .map((res: Response) => res.json());
    
  }

  searchVendor(ven_id : number) : Observable<Vendor> {
    return this._http.get("http://localhost:8080/vsearch/"+ven_id)
    .map((res: Response) => res.json());
  }
  showVendor() : Observable<Vendor[]> {
    return this._http.get("http://localhost:8080/vshow")
    .map((res: Response) => res.json());
  }
  showVendorInfo(username : string) : Observable<Vendor>{
    return this._http.get("http://localhost:8080/showonevendor/"+username )
    .pipe(map((res: Response) => res.json()));
  }
  vendorOrder() : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/vendorOrders/"+this.vendor1.ven_id)
    .map((res: Response) => res.json());
  }
  vendorPendingOrder() : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/vendorPendingOrders/"+this.vendor1.ven_id)
    .map((res: Response) => res.json());
  }
}
