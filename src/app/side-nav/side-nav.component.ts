import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  menuProperty: String = 'false';
  isNavSmall = true;
  private meniuSubscription: Subscription;
  constructor(private menuService: MenuService,
               private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.menuService.makeHeaderSmall(false);
    this.meniuSubscription.unsubscribe();
    this.menuService.openCloseMenu();
  }
   
  ngOnInit() {
    this.meniuSubscription = this.menuService.openCloseMenuStatus
      .subscribe((status: String) => {
        this.menuProperty = status;
        this.menuProperty === 'false' ? this.isNavSmall = true : '';
        this.menuService.expandMeniu(false);
      });
    this.menuService.makeHeaderSmall(true);
  }
  openSideMeniu() {
    this.isNavSmall === true ? this.isNavSmall = false : this.isNavSmall = true;
    this.menuService.expandMeniu(null);
  }

}
