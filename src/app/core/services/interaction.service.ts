import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { SERVICES } from 'src/app/model/mock-service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private sendSource = new Subject<any>();
  servicesURL = "http://localhost:4200/assets/service.json";

  getSource$ = this.sendSource.asObservable();

  constructor(private http: HttpClient) { }

  send(data: any) {
    this.sendSource.next(data);
  }

  getServices(): Observable<any> {
    // return of(SERVICES);
    // console.log(this.http.get(this.servicesURL));
    return this.http.get(this.servicesURL);
  }
}
