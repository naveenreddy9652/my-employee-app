import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-parent',
  templateUrl: './rating-parent.component.html',
  styleUrls: ['./rating-parent.component.css']
})
export class RatingParentComponent {
  public rating: string = ''
  
  catch(value:any){
      this.rating = value;
  }
}
