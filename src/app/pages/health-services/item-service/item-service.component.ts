import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InteractionService } from './../../../core/services/interaction.service'

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.scss']
})
export class ItemServiceComponent implements OnInit {

  @Input() item: any;
  open = true;
  sub: Subscription;

  constructor(private inter: InteractionService) { }

  ngOnInit() {
    this.sub = this.inter.getSource$.subscribe((data: any) => {
      this.open = data;
    });
  }
  
}
