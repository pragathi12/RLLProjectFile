import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customer : Customer;
  isValid : boolean;
  username : string;
  password : string;
  constructor(private _service : CustomerService,private _router : Router ) 
  { 
    this.username="";
    this.password="";
    this.isValid=false;

  }
  insert(customerForm : NgForm) {
    if(customerForm.invalid){
        return;
   }
 this.isValid=true;
 
 this._service.isAuthenticated(this.username,this.password).subscribe(x=>{
   if(x=="1"){
     alert("success");
     localStorage.setItem("customer",this.username);
     
    this._router.navigate(['/cusdash']);
   }
   })
 }

  ngOnInit(): void {
  }

}