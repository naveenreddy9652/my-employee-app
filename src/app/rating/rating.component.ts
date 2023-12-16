import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  public rate: string = '';
  @Output() public bEvent: EventEmitter<any> = new EventEmitter();

  send(){
    this.bEvent.emit(this.rate)
  }
}
