import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarserviceService {

  private showNavBar = new Subject();
  constructor() { }

  sendShowNav(value:boolean){
    this.showNavBar.next(value);
  }

  getShowNav():Observable<any>{
    return this.showNavBar.asObservable();
  }

}
