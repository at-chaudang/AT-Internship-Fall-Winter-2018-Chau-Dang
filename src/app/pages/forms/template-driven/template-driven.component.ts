import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName = "";

  submit(f: NgForm) {
    this.userName = f.control.value;
    console.log(this.userName); 
  }

  alo() {
    console.log("alo");
  }

}
