import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  public count:number = 0;
   constructor(private _CommonService: CommonService){
      _CommonService.getValue().subscribe(
        (data:any)=>{
          this.count = data
        }
      )
   }

   click(){ 
    this._CommonService.setValue()

   }
}
