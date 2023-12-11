import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public userName:string =''
  public users: string[] = []

  submit(){
   this.users.push(this.userName)
   this.userName = ''

  }

  delete(){
   this.users.pop()
  }
}
