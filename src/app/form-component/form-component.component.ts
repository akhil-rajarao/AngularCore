import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  constructor(private fb:FormBuilder){

  }
signup= this.fb.group({
  user:this.fb.control('akhil'),
  mail:[],
  pwd:[null,Validators.required]
})
}
