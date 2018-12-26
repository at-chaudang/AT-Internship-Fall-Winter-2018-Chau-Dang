import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log(JSON.stringify(this.route.snapshot.data[0]));
  }
  
}
