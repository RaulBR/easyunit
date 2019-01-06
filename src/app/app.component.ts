import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  title = 'easyunit';
  selectMenu :String;
  isLogedin = false;
  private loginSubscription :Subscription;
    constructor(private loginService: LoginService){

    }
  ngOnInit(): void {
    this.loginSubscription=this.loginSubscription = this.loginService.loggedin
      .subscribe((isLogedIn:boolean)=>{
        this.isLogedin=isLogedIn;
      });
  }
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }


}
