import { Component } from '@angular/core';
import { VahicleService } from '../vahicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vahicle-details',
  templateUrl: './vahicle-details.component.html',
  styleUrls: ['./vahicle-details.component.css']
})
export class VahicleDetailsComponent {
  public vahicle:any = {}

    constructor(private _vahicleService:VahicleService, _activateRouting:ActivatedRoute){
        _activateRouting.params.subscribe(
          (data:any)=>{
           this.vahicle = data;
           _vahicleService.getVahicleDeatails(data.id).subscribe(
            (data:any)=>{
              this.vahicle = data;
            }
           )
          },
          (err:any)=>{
            alert("internal server error")
          }
        )
    }
}
