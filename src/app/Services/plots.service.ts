import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {

  private baseUrl = 'https://MyApp.com/api';

  constructor(private http: HttpClient) { }
  fetchData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/data`);
  }
}




