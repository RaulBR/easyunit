import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SideMeniuService } from './side-nav-meniu.service';

@Component({
  selector: 'app-side-nav-meniu',
  templateUrl: './side-nav-meniu.component.html',
  styleUrls: ['./side-nav-meniu.component.scss'],
  providers:[SideMeniuService]
})
export class SideNavMeniuComponent implements OnInit, OnDestroy {
  private hoverObservable: Subscription;
  icons = [];
 
  //bring with service 
  private meniuSubscription: Subscription;
  constructor(private menuService: MenuService,
    private loginService: LoginService,
    private router: Router,
    private sideMenuData: SideMeniuService) { }
  isDetailed: boolean = false;
  ngOnInit() {
    this.icons = this.sideMenuData.getSideMeniuData();
    this.meniuSubscription = this.menuService.expandedMeniuStatusSubject
      .subscribe((status: boolean) => {
        this.isDetailed = status;
      });
  }
  onClick(event) {
    switch (event.name) {
      case "exit_to_app":
        this.loginService.onLogin();
        this.router.navigate(['/']);
        break;
      case "domain":
        this.router.navigate(['/main']);
        break;
      case "assessment":
        this.router.navigate(['/home']);
        break;
      default:
      //   this.loginService.onLogin();
      //  this.router.navigate(['/']);
    }
    this.menuService.setHombarAddres(event);
    this.menuService.openCloseMenu();
 
  }
  ngOnDestroy() {


  }

}
