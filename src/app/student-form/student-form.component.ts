import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  public studentForm = new FormGroup({
     name: new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
     class: new FormControl(null, [Validators.required, Validators.min(1)]),
     fathersName: new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
     email: new FormControl(null, [Validators.required, Validators.email]),
     dataOfBirth: new FormControl(null, [Validators.required,]),


    address: new FormGroup({
      addressLane: new FormControl(null, [Validators.required,]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),

    }),

    marks: new FormArray([]),
    type:new FormControl(),
    residential:new FormControl(null, [Validators.required,]),
    dayScolor:new FormControl(null, [Validators.required,]),



  })

  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }

  add(){
    this.marksFormArray.push(
      new FormGroup(
      {
        className: new FormControl(null,[Validators.required, Validators.min(1), Validators.max(9)]),
        year: new FormControl(null,[Validators.required,]),
        percentage: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(99)]),
    })
    )
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }

  submit(){
    console.log(this.studentForm)
  }
}
