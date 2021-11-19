import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  men:Menu;
  msg:string;
  insert(MenuAdd:NgForm){
    this._service.menuInsert(this.men).subscribe(x=>{
      this.msg=x;
    });
    alert("Menu Added");
    this._router.navigate(['/vendorlogin']);

  }

  constructor(private _service:HomeServiceService,private _router:Router) {
    this.men=new Menu();
   }

  ngOnInit(): void {
  }

}

