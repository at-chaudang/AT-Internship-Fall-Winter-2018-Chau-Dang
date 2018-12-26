import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookShedule } from '../../model/book-shedule';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  fullName = "";
  addess = "";
  phoneNumber = "";
  time = "";
  data: BookShedule[] = [];
  id = 0;

  constructor() { }

  ngOnInit() { 
  }

  onSubmit(bookSchedule: NgForm) {
    this.fullName = bookSchedule.controls.fullName.value;
    this.addess = bookSchedule.controls.addess.value;
    this.phoneNumber = bookSchedule.controls.phoneNumber.value;
    this.time = bookSchedule.controls.time.value;
    this.data.push(new BookShedule(this.id++, this.fullName,this.addess,this.phoneNumber,this.time));
    console.log("SB: " + JSON.stringify(this.data));
  } 
}
