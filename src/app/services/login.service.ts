import { Subject } from "rxjs";

export class LoginService{

 loggedin = new Subject();
private isLoggedin = false;
 onLogin(){
     this.isLoggedin===false ?  this.isLoggedin = true : this.isLoggedin = false;
     this.loggedin.next(this.isLoggedin);
     
 }
}