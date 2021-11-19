import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer} from './customer';
import { map } from 'rxjs/operators';
import { Orders } from './orders';
import 'rxjs/add/operator/map';
import { Wallet } from './wallet';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  cuser:string;
  customer1:Customer;
  isAuthenticated(username:string,password:string) : Observable<string> {
    return this._http.get("http://localhost:8080/customerAuthenticate/"+username+"/"+password)
    .map((res: Response) => res.json());
  }
  
  constructor(private _http : Http) {
    this.cuser=localStorage.getItem("cuser");
    this.customer1=localStorage.getItem("customerdata")? JSON.parse(localStorage.getItem('customerdata')):[];
   }

  searchCustomer(cus_id : number) : Observable<Customer> {
    return this._http.get("http://localhost:8080/csearch/"+cus_id)
    .map((res: Response) => res.json());
  }
  showCustomer() : Observable<Customer[]> {
    return this._http.get("http://localhost:8080/cshow")
    .map((res: Response) => res.json());
  }
  showCustomerInfo(cus_username : string) : Observable<Customer>{
    return this._http.get("http://localhost:8080/showonecustomer/"+cus_username )
    .pipe(map((res: Response) => res.json()));
  }
  customerOrder() : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/customerorder/"+this.customer1.cus_id)
    .map((res: Response) => res.json());
  }
  customerPendingOrder() : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/customerPendingOrders/"+this.customer1.cus_id)
    .map((res: Response) => res.json());
  }
  customerwallet(cus_id:number): Observable<Wallet[]> {
    return this._http.get("http://localhost:8080/cwallets/"+cus_id)
    .map((res: Response) => res.json());
  }
  customerSearchWallet(cus_id:number,wal_src:string) : Observable<Wallet> {
    return this._http.get("http://localhost:8080/cwalletsearch/"+cus_id+"/"+wal_src)
    .map((res: Response) => res.json());
  }

  placeOrder(orders : Orders) : Observable<string> {
    return this._http.post("http://localhost:8080/placeOrder/",orders).
    map((res : Response) => res.text());
  }
  acceptrejectorders(oid:number,vid:number,status:string) : Observable<string> {
    return this._http.post("http://localhost:8080/acceptOrRejectOrder/"+oid+"/"+vid+"/"+status,null).
    map((res : Response) => res.text());
  }



}
