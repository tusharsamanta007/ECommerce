import { Component, OnInit , OnDestroy } from '@angular/core';
import { NavbarserviceService } from 'src/app/shared/services/navbarservice.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  messages:any = [];
  showMessage:boolean = false;
  sub: any;

  constructor(
    private navbarservice: NavbarserviceService
  ) { }

  ngOnInit(): void {
    this.sub = this.navbarservice.getMessageValues().subscribe((data:any)=>{
      this.messages = [{ severity: data.severity, summary: data.summary, detail: data.detail }];
      this.showMessage = true;
      setTimeout(()=>{
        this.showMessage = false;
      },3000);
    });
    
  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

}
