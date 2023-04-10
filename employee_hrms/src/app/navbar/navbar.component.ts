import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarserviceService } from '../navbarservice.service';
import { AuthorisationService } from '../user/authorisation.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbarService: NavbarserviceService,
    private authorisationService: AuthorisationService,
    private router: Router
  ) { }

  showNavbar:boolean = false;
  username:string = '';

  ngOnInit(): void {
    this.showNavbar = this.authorisationService.isLoggedIn();
    this.navbarService.getShowNav().subscribe((res)=>{
      this.showNavbar = res;
    });
    let token = localStorage.getItem('appbearer');
    if(token){
      console.log(token)
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      console.log(decodedToken);
    }
    
  }

  SignOut(){
    localStorage.removeItem('appbearer');
    this.navbarService.sendShowNav(false);
    this.router.navigate(['/login']);
  }

}
