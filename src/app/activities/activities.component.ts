import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
   public activities:any = {};
   
   constructor(private _activityService:ActivityService){
      _activityService.getActivities().subscribe(
        (data:any)=>{
          this.activities = data;
        },
        (err:any)=>{
          alert("Intrnal Eerver Error")
        }
      )
      console.log(this.activities.type)

   }

   refresh(){
     this._activityService.getActivities().subscribe(
      (data:any)=>{
        this.activities = data;
      },
      (err:any)=>{
        alert("Intrnal Eerver Error")
      }
    )
    console.log(this.activities.link)

   }
}
