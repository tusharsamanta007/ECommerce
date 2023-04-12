import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarserviceService {

  private showNavBar = new Subject();
  private showSpinner = new Subject();
  private showMes = new Subject();
  
  constructor() { }

  sendShowNav(value:boolean){
    this.showNavBar.next(value);
  }

  getShowNav():Observable<any>{
    return this.showNavBar.asObservable();
  }

  sendSpinnerValue(value:boolean){
    this.showSpinner.next(value);
  }

  getSpinnerValue():Observable<any>{
    return this.showSpinner.asObservable();
  }

  showMessage(severity:any , summary:any , detail:any){
    let value = {
      severity: severity,
      summary: summary,
      detail: detail
    }
    this.showMes.next(value);
  }

  getMessageValues():Observable<any>{
    return this.showMes.asObservable();
  }
}
