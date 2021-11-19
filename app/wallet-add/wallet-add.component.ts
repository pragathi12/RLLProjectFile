import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { HomeServiceService } from '../home-service.service';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.css']
})
export class WalletAddComponent implements OnInit {
  cus:Customer;
  wallets:Wallet;
  msg:string;
  insert(walletAdd:NgForm){
    alert(this.wallets.cus_id)
    this._service.walletInsert(this.wallets).subscribe(x=>{
      this.msg=x;
    });
    alert("Wallet Added");
    

  }

  constructor(private _service:HomeServiceService) {
    this.wallets=new Wallet();
    this.cus = localStorage.getItem("customerdata")? JSON.parse(localStorage.getItem('customerdata')):[];
    this.wallets.cus_id=this.cus.cus_id;
   }
  
  ngOnInit(): void {
  }

}
