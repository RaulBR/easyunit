import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { IconModel } from '../models/icon-model';

@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.scss']
})
export class HomebarComponent implements OnInit {

  constructor(private meniuService: MenuService) { }
  barValue = 'Acasa';
  icon='domain'
  ngOnInit() {
    this.meniuService.pageSelectedSubject.
    subscribe((selected:IconModel)=>{
      this.barValue = selected.desc;
    });
    
  }

}
