import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  public account:any = {};
   constructor(private _accountService:AccountService, private _activateRouting:ActivatedRoute){
       _activateRouting.params.subscribe(
        (data:any)=>{
          _accountService.getAccounnt(data.id).subscribe(
            (data:any)=>[
              this.account = data
            ]
          )
        }
       )
   }
}
