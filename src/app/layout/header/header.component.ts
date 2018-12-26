import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  srcImages = "./assets/images/";
  srcLogo = this.srcImages + "logo.png";
  constructor() { }

  ngOnInit() {
  }
}
