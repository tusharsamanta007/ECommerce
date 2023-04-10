import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { NavbarserviceService } from 'src/app/navbarservice.service';
import { AuthorisationService } from '../authorisation.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),    
    password: new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  showLogin:boolean = true;
  submitted:boolean = false;
  signupForm = new FormGroup({
    username: new FormControl(null,Validators.required),    
    password: new FormControl(null,Validators.required),
    reEnterPassword: new FormControl(null,Validators.required)
  });

  constructor(
    private authorisation: AuthorisationService,
    private router: Router,
    private navbarservice: NavbarserviceService
  ) { }

  ngOnInit(): void {
    
  }

  signin(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.authorisation.signin(this.loginForm.value).subscribe((response)=>{
        console.log(response);
        if(response.status == '1'){
          this.navbarservice.sendShowNav(true);
          this.router.navigate(['']);
        } else{
          console.log(response.message);
        }
      });
    } else{
      console.log("Form is not valid")
    }
  }

  signUp(){
    if(this.signupForm.valid){
      if(this.signupForm.value.password == this.signupForm.value.reEnterPassword){
        this.authorisation.signup(this.signupForm.value).subscribe((response:any)=>{
          console.log(response);
        });
      } else{
        console.log("password Doesn't matched");
      }
    } else{
      console.log("Form is not valid")
    }
  }

  toggleSignIn(){
    this.showLogin = !this.showLogin;
  }

  get username(){
    return this.loginForm.get('username');
  } 

  get password(){
    return this.loginForm.get('password');
  }

}
