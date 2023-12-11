import { Component } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

    public userInfo:any = []
    public userAddress:any = {}
    public userCompanyDetails:any = {}
    public userBankDetails:any = {}

    constructor(private _userInfoService: UserInfoService){
      _userInfoService.getInfo().subscribe(
        (data:any)=>{
          this.userInfo = data.users;
        },
        (err:any)=>{
          alert("Internal Server Error")
        }
      )
    }
}
