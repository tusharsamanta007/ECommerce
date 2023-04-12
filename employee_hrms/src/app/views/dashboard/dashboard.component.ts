import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  productDetailsNew:any;

  ngOnInit(): void {
    this.getProductDetails();
    
  }

  getProductDetails(){
    this.dashboardService.getProducts().subscribe((response:any)=>{
      console.log(response);
      this.productDetailsNew = response.productDetails;
    });
  }

}
