import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-show',
  templateUrl: './menu-show.component.html',
  styleUrls: ['./menu-show.component.css']
})
export class MenuShowComponent implements OnInit {
  menus : Observable<Menu[]>;
  constructor(private _service : MenuService) {
    this.menus = this._service.showMenu();
   }

  ngOnInit(): void {
  }

}
