import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VahicleService } from '../vahicle.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
     name: new FormControl(),
     phone: new FormControl(),
     city: new FormControl(),
     image: new FormControl(),

  })

  public vahicleGroup:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()

  })

  public accountGroup:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),

  })

  constructor(private _userService:UserService, private _vahivleService:VahicleService, private _accountService:AccountService){

  }

  submit(){
    this._userService.createUser(this.userForm.value).subscribe(
      (data:any)=>{
        alert("created Successfully")
      },
      (err:any)=>{
        alert("Internal Server error")
      }
    )
  }

  createVahicle(){
    this._vahivleService.createvahicle(this.vahicleGroup.value).subscribe(
      (data:any)=>{
        alert("created successfully");
      },
      (err:any)=>{
        alert("Internal Server error");
        
      }

    )
  }

  createAccount(){
     this._accountService.createAccount(this.accountGroup.value).subscribe(
        (data:any)=>{
          alert("account created successfully");
        },
        (err:any)=>{
          alert("Internal Server error")

        }
     )
     console.log(this.accountGroup.value)
  }

}
