import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private apiUrl = 'https://dev.matiivilla.cl/duoc/location/';
  
  

  constructor(private http: HttpClient) { }

  getRegions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}region`);
  }
}
