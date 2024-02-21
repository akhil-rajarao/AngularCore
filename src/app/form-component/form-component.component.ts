import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent {
  constructor(private fb: FormBuilder) {}

  customValidation = (a: any) => {
    let pattern = /[A-Z]/;
    if (pattern.test(a.value)) {
      return null;
    }
    return { noUpper: true };
  };
  signup = this.fb.group({
    user: this.fb.control(null, this.customValidation),
    mail: [],
    pwd: [null, Validators.required],
  });
  errormsg = this.signup.controls.user.errors?.['noUpper'] == true;

  show = () => {
    console.log(this.signup.controls.user.errors?.['noUpper']);
  };
}
