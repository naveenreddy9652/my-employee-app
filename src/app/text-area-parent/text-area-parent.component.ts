import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-area-parent',
  templateUrl: './text-area-parent.component.html',
  styleUrls: ['./text-area-parent.component.css']
})
export class TextAreaParentComponent {
  public content :string = '';
  public max:number = 0;
  public chars:string = '';

  catch(value:any){
    this.max = value
  }

  event(){
    this.chars =this.content
    if(this.content.length === this.max){
      alert('you reached')
    }
  }

 
}
