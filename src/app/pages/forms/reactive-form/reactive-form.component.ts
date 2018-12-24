import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formReactive: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        streetNumber: ['']
      }),
      password: [''],
      confirmPassword: ['']
    })
  }

  

}
