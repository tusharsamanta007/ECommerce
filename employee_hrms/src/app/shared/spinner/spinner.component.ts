import { Component, OnInit , OnDestroy } from '@angular/core';
import { NavbarserviceService } from 'src/app/shared/services/navbarservice.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner:boolean = false;
  sub: any;

  constructor(
    private navbarservice: NavbarserviceService
  ) { }

  ngOnInit(): void {
    this.sub = this.navbarservice.getSpinnerValue().subscribe((data:any)=>{
      this.showSpinner = data;
    });
  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

}
