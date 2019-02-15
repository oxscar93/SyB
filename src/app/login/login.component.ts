import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';
import { AlertService } from '../common-services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params: any;

  constructor(private loginService: LoginService, 
              private router: Router, 
              private execHandler: ExecutionHandlerService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.params = {};
  }

  signIn(isValid: boolean){
    if (isValid){
      this.signInUser();
    }
  }

  logOut(){
    this.loginService.logOut();
  }

  signInUser(){
    this.execHandler.execute(
      ()=> {return this.loginService.signIn(this.params)},
      (result)=> {this.handleSignInResponse(result)})
  }
  
  handleSignInResponse(r){
    if (r.signedIn){
         this.router.navigate(['/home/menu-comedor-list'])
    }else{
      this.router.navigate(['/']);
      this.showError(r.error)
    }
 }

  showError(message: string) {
    this.alertService.clear()
    this.alertService.error(message);
  }
}
