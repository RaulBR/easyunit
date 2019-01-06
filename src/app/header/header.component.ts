import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import{MenuService} from '../services/menu.service';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() headerValue = new EventEmitter<String>();
  constructor(private menuService: MenuService, 
              private loginService:LoginService, 
                ){}
              
  private meniuSupscription: Subscription;

  isLogedin:boolean;
  ngOnInit() {

    this.meniuSupscription = this.menuService.isHeaderSmallSubject
    .subscribe(
      (data:boolean)=>{
        this.isLogedin = data;
      }
    );
    
  }
  showMeniu() {
    this.menuService.openCloseMenu();
  }

  ngOnDestroy(): void {
    this.isLogedin = false;
    this.meniuSupscription.unsubscribe();

  }
}
