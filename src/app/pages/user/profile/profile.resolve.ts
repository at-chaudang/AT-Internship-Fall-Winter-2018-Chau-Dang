import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: "root"
})
export class ProfileResolver implements Resolve<any> {
  constructor(
    private api: ApiService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.api.get("service.json").pipe(
      delay(1000),
      map(data => {
        console.log(JSON.stringify(data) + " feeded!");
      })
    );
  }
}
