import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logninService : LoginService,
              private router:Router) { }
  onLogin(){
    this.logninService.onLogin();
   this.router.navigate(['main']);
  }
  ngOnInit() {
  }

}
