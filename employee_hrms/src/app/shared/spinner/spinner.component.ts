import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavbarserviceService } from 'src/app/navbarservice.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner:boolean = false;

  constructor(
    private navbarservice: NavbarserviceService
  ) { }

  ngOnInit(): void {
    this.navbarservice.getSpinnerValue().subscribe((data:any)=>{
      console.log(data)
      this.showSpinner = data;
    });
  }

}
