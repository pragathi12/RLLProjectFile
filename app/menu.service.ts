import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http : Http) {}

  showMenu() : Observable<Menu[]> {
    return this._http.get("http://localhost:8080/mshow")
    .map((res: Response) => res.json());
  }
  searchMenu(men_id : number) : Observable<Menu> {
    return this._http.get("http://localhost:8080/msearch/"+men_id)
    .map((res: Response) => res.json());
}
}
