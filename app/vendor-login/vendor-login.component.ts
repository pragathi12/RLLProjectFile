import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  vendor : Vendor;
  isValid : boolean;
 
  username : string;
  password : string;
  count : Observable<string>;
  insert(vendorForm : NgForm) {
    if(vendorForm.invalid){
        return;
   }
 this.isValid=true;
 
 this._service.isAuthenticated(this.username,this.password).subscribe(x=>{
  if(x=="1"){
    alert("success");
    localStorage.setItem("vendor",this.username);

    this._router.navigate(["/vendash"])
  }
  })
 }

  constructor(private _service : VendorService,private _router : Router) 
  { 
    this.username="";
    this.password="";
    this.isValid=false;
    
  }

  ngOnInit(): void {
  }

}