import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VahicleService } from '../vahicle.service';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public heading: string = '';
  public id: any = '';

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    image: new FormControl(),

  })

  public vahicleGroup: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    image: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()

  })

  public accountGroup: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),

  })

  constructor(private _userService: UserService, private _vahivleService: VahicleService, private _accountService: AccountService, private _activateRoute: ActivatedRoute) {
    _activateRoute.params.subscribe(
      (data: any) => {
        this.id = data.id
        _userService.getUserDetails(data.id).subscribe(
          (data: any) => {
            this.userForm.patchValue(data);
          }
        )
      
      }
    )

    _activateRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        _vahivleService.getVahicleDeatails(data.id).subscribe(
          (data: any) => {
            this.vahicleGroup.patchValue(data)
          }
        )
      },
      (err:any)=>{
         alert('internal server error')
      }
      )
    
    _activateRoute.params.subscribe(
      (data:any)=>{
        _accountService.getAccounnt(data.id).subscribe(
          (data:any)=>{
            this.accountGroup.patchValue(data)
          }
        )
      }
    )
  }



  

  submit() {

    if (this.id) {
      this.heading = 'Edit User';
      this._userService.editUser(this.userForm.value, this.id).subscribe(
        (data: any) => {
          alert('Edited succesfullu')
        },
        (err: any) => {
          alert("internal server erroe")

        }

      )
    }
    else {
      this.heading = 'Create User';

      this._userService.createUser(this.userForm.value).subscribe(
        (data: any) => {
          alert("created Successfully")
        },
        (err: any) => {
          alert("Internal Server error")
        }
      )
    }


  }


  createVahicle() {
    if (this.id) {
       this._vahivleService.editVahicle(this.id,this.vahicleGroup.value).subscribe(
        (data: any) => {
          alert('Edited succesfullu')
        },
        (err: any) => {
          alert("internal server erroe")

        }
       )
    }
    else{
      this._vahivleService.createvahicle(this.vahicleGroup.value).subscribe(
        (data: any) => {
          alert("created successfully");
        },
        (err: any) => {
          alert("Internal Server error");
  
        }
  
      )
    }


  }

  createAccount() {

    if (this.id) {
      this._accountService.editeAccount(this.id, this.accountGroup.value).subscribe(
        (data: any) => {
          alert("edited successfully");
        }
      )
    }
    else {
      this._accountService.createAccount(this.accountGroup.value).subscribe(
        (data: any) => {
          alert("account created successfully");
        },
        (err: any) => {
          alert("Internal Server error")

        }
      )
      console.log(this.accountGroup.value)
    }
  }


}
