import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  productDetailsNew:any;
  prductDetail:any = [
    {
      imageId:'images/p1.png',
      productId:'hihdihsihalhahisahihsihljsdj',
      productName:'Orange',
      productPrice:'10'
    },
    {
      imageId:'images/p2.png',
      productId:'hsfkfcehewhcfhehchhechkwhddk',
      productName:'Durain',
      productPrice:'12'
    },
    {
      imageId:'images/p3.png',
      productId:'whcughhvwhlkwahhhhshslajhkqd',
      productName:'Kiwi',
      productPrice:'9'
    },
    {
      imageId:'images/p4.png',
      productId:'skhishivhrihigrhghhlekhcgirs',
      productName:'Mango',
      productPrice:'10'
    },
    {
      imageId:'images/p5.png',
      productId:'hsgclihihgcresihcishajiwfklj',
      productName:'Banana',
      productPrice:'6'
    },
    {
      imageId:'images/p6.png',
      productId:'uksgceuhfuiciewhichwihioahhx',
      productName:'Apple',
      productPrice:'14'
    }
  ];

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.dashboardService.getProducts().subscribe((response)=>{
      console.log(response);
      // this.productDetailsNew = response;
    });
  }

}
