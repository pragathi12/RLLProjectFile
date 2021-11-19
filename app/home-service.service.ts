import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
import { Menu } from './menu';
import { Vendor } from './vendor';
import { Wallet } from './wallet';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  vendorInsert(ven:Vendor):Observable<string>{
    return this._http.post("http://localhost:8080/vadd/",ven).
    map((res : Response) => res.text());
  }
  menuInsert(men:Menu):Observable<string>{
    return this._http.post("http://localhost:8080/madd/",men).
    map((res : Response) => res.text());
  }
  walletInsert(wallets:Wallet):Observable<string>{
    return this._http.post("http://localhost:8080/wadd/",wallets).
    map((res : Response) => res.text());
  }


  customerInsert(cus:Customer):Observable<string>{
    return this._http.post("http://localhost:8080/cadd/",cus).
    map((res : Response) => res.text());
  }
  constructor(private _http : Http) { }
}