import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  cus:Customer;
  msg:string;
  insert(CustomerAdd:NgForm){
    this._service.customerInsert(this.cus).subscribe(x=>{
      this.msg=x;
    });
    alert("Account Created");
    this._router.navigate(['/customer']);

  }

  constructor(private _service:HomeServiceService,private _router:Router) {
    this.cus=new Customer();
   }

  ngOnInit(): void {
  }

}
