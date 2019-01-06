import { EventEmitter } from '@angular/core';
// import { Subject } from '../../../node_modules/rxjs';
import { Subject }  from 'rxjs';

export class MenuService{
    isHeaderSmallSubject = new Subject();
    openCloseMenuStatus = new Subject();
    expandedMeniuStatusSubject = new Subject();
    pageSelectedSubject = new Subject()
    private menuValue: String ="false"
    private expandMeniuStatus :boolean = false;
    openCloseMenu(){
        if(this.menuValue ==="false"){
            this.menuValue ="true"
          } else{
            this.menuValue ="false"
          }
          this.openCloseMenuStatus.next(this.menuValue);
    }
    makeHeaderSmall(status:boolean){
        return this.isHeaderSmallSubject.next(status);
    }
    expandMeniu(status:boolean){
        if(status == null){
            this.expandMeniuStatus ===false ? 
            this.expandMeniuStatus = true:
            this.expandMeniuStatus = false;
        }else{
            this.expandMeniuStatus = status;
        }
        this.expandedMeniuStatusSubject.next(this.expandMeniuStatus);
    
    }
    setHombarAddres(pageSelected){
        this.pageSelectedSubject.next(pageSelected);
    }
}
 