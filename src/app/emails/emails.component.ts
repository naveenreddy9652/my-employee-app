import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {
  public emails: any = [];
    constructor(private _emailService:EmailService){
       _emailService.getEmails().subscribe(
        (data:any)=>{
           this.emails = data;
        },
        (err:any)=>{
           alert('Internal Server Error')
        }
       )
    }
}
