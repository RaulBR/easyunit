import { Component, OnInit } from '@angular/core';
import { PopupInputOpen } from '../shared/popup-input/popup-input-open.service';
import { UtilitiesService } from './utilities.service';
import { DialogData } from '../shared/popup-input/popup-input.component';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  providers:[UtilitiesService]
})
export class UtilitiesComponent implements OnInit {
  utilityList = [];
  constructor(private popup:PopupInputOpen,
              private utilityService: UtilitiesService) { }

  ngOnInit() {
    this.utilityList =  this.utilityService.getUtilities()
  }
  openPopup(element){
 
    let dialogModel =<DialogData>{};
    
    console.log(dialogModel, ' ' );
    switch (element.id) {
      case 'mesure':
      dialogModel.inputs = [{label:'calda',placeholder:'Apa calda',value:''},
        {label:'rece',placeholder:'Apa rece',value:''}];
      break;
      case 'pay':
       dialogModel.inputs =[{label:'label',placeholder:'PlaceHolder',value:''}];
        break;
      case 'event':
         dialogModel.inputs =[{label:'label',placeholder:'PlaceHolder',value:''},
      {label:'label2',placeholder:'PlaceHolder2',value:''}];
        break;
      case 'building':

        break;
      default:
    }
    
    // dialogModel.title = element.desc;
   
    dialogModel.title = element.desc
    this.popup.openDialog(dialogModel);
  }
}
