import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-accept-reject',
  templateUrl: './accept-reject.component.html',
  styleUrls: ['./accept-reject.component.css']
})
export class AcceptRejectComponent implements OnInit {
ven:Vendor
oid:number;
venId:number;
ordStatus:string;
result:string;
  constructor(private _customerservice :CustomerService) {
    this.ven=localStorage.getItem('vendorData')?JSON.parse(localStorage.getItem('vendorData')):[]
    this.venId=this.ven.ven_id;
    this.oid=parseInt(localStorage.getItem("oid"))
   }
   acceptReject(){
    this._customerservice.acceptrejectorders(this.oid,this.venId,this.ordStatus).subscribe
    (x=>{
      this.result=x;
    })
  

   }

  ngOnInit(): void {
  }

}
