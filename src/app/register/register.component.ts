import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './customValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // namePerson = new FormControl();
  // pass = new FormControl();
  // mobile = new FormControl();
  // regForm = new FormGroup({
  //   name: this.namePerson,
  //   password: this.pass,
  //   mobileNum: this.mobile
  // });
  regForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      confirmPassword: this.fb.control('', [Validators.required]),
      mobileNum: this.fb.control('', [Validators.required]),
      skills: this.fb.array([])
    }, { validators: customValidator });
  }
  get skills() {
    return this.regForm.get('skills') as FormArray;
  }
  removeSkill(i) {
    (this.regForm.get('skills') as FormArray).removeAt(i);

  }
  addskill() {
    (this.regForm.get('skills') as FormArray).push(new FormControl());
  }
  submitForm() {
    console.log(this.regForm.value);
    this.regForm.reset();
  }
}
