import { Component } from '@angular/core';
import { VahicleService } from '../vahicle.service';

@Component({
  selector: 'app-vahicles',
  templateUrl: './vahicles.component.html',
  styleUrls: ['./vahicles.component.css']
})
export class VahiclesComponent {
  public vahicles:any = [];
  public term:string = '';
  public pageNO:string = '';
  public column:string = '';
  public order:string = '';


  constructor(private _userService:VahicleService){
     _userService.getVahicle().subscribe(
      (data:any)=>{
         this.vahicles = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
     )
  }

  filterdVahicles(){
    this._userService.getFilterVahicles(this.term).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  page(){
    this._userService.getPages(this.pageNO).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  sort(){
    this._userService.sortedVahicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:string){
    this._userService.deleteVahicle(id).subscribe(
       (data:any)=>{
        alert("deleted succesfully");
        location.reload()
       },
       (err:any)=>{
        alert("Internal Server Error");

       }
    )
  }

}
