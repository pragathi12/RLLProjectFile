import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

  ven:Vendor;
  msg:string;
  insert(VendorAdd:NgForm){
    this._service.vendorInsert(this.ven).subscribe(x=>{
      this.msg=x;
    });
    alert("Account Created");
    this._router.navigate(['/vendor']);

  }

  constructor(private _service:HomeServiceService,private _router:Router) {
    this.ven=new Vendor();
   }

  ngOnInit(): void {
  }

}

