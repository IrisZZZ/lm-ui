import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LmserviceService {

  constructor( private http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'http://localhost:8080/api/v1/benefit';
    return this.http.get<any>(url);
  }
}
