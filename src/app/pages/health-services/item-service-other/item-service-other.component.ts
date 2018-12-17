import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-item-service-other',
  templateUrl: './item-service-other.component.html',
  styleUrls: ['./item-service-other.component.scss']
})
export class ItemServiceOtherComponent implements OnInit {

  toggle = false;

  constructor(private inter: InteractionService) { }

  ngOnInit() {
  }

  openGift() {
    this.toggle = !this.toggle;
    this.inter.send(this.toggle);
  }

}
