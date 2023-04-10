import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter,map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(private http: HttpClient) { }

  signin(data:any){
    const URL = "http://localhost:3000/auth/authentication";
    return this.http.post(URL,data).pipe(map(
      (response:any)=>{
        if(response.status == '1'){
          localStorage.setItem('appbearer',response.appbearer);
        }
        return response;
      }
    ));
  }

  signup(data:any){
    const URL = "http://localhost:3000/auth/saveCredentials";
    return this.http.post(URL,data);
  }

  isLoggedIn(){
    let token = localStorage.getItem('appbearer');
    if(token){
      return true;
    }else{
      return false;
    }
  }


}
