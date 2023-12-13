import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

public userForm = new FormGroup({
  name: new FormControl(null,[Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
  age: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(100)]),
  phone: new FormControl(null,[Validators.required, Validators.min(10000000), Validators.max(9999999999)]),
  email: new FormControl(null,[Validators.required, Validators.email]),
  address: new FormGroup({
    city: new FormControl(),
    pincode: new FormControl(null,[Validators.required, Validators.min(100000), Validators.max(999999)]),
  }),
  cards: new FormArray([]),
  type: new FormControl(),
  busFee: new FormControl(),
  hostelFee: new FormControl(),

})

get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

add(){
  this.cardsFormArray.push(
    new FormGroup({
      no: new FormControl(),
      expairy: new FormControl(),
      cvv: new FormControl(null, [Validators.required])
    })
  )
}

delete(i:number){
  this.cardsFormArray.removeAt(i)
}

submit(){
  console.log(this.userForm)
}

}
