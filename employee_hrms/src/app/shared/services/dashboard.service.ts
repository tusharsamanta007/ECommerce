import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getProducts(){
    const URL = 'http://localhost:3000/product/getAllProductDetail';
    return this.http.get(URL);
  }

  createProduct(data:any){
    const URL = 'http://localhost:3000/product/createProduct';
    return this.http.post(URL,data);
  }
}
