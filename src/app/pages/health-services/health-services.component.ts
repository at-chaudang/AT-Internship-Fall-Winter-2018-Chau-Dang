import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../model/mock-service';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.scss']
})
export class HealthServicesComponent implements OnInit {

  services = SERVICES;

  constructor() { }

  ngOnInit() {
  }

}
