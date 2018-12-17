import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { SERVICES } from '../../model/mock-service';
import { Service } from '../../model/serviceItem';
import { ApiService  } from 'src/app/core/services/api.service';
// import {  } from './';
// import { data } from './../../model/service.json';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.scss']
})
export class HealthServicesComponent implements OnInit {

  // services = SERVICES;
  services: Service[] = null;

  constructor(private api: ApiService) { 
  }

  ngOnInit() {
    this.getServices();
  }

  getServices(): void {
    this.api.get("service.json")
      .subscribe(services => this.services = services);
  }
}
