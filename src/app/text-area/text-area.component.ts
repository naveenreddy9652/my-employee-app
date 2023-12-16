import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  public maxlength: number = 0;

  @Output() public bEvent:EventEmitter<any> = new EventEmitter()

  selectMax(){
    this.bEvent.emit(this.maxlength)
  }
}
