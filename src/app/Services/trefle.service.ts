import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { TrefleInfo } from '../interfaces/trefle-info';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {

  constructor(private httpClient: HttpClient) { }

  trefleAPI = `${environment.apiDomain}/api/trefle`;

  getTrefle(id: number): Observable<TrefleInfo> {
    return this.httpClient.get<TrefleInfo>(`${this.trefleAPI}/${id}`);
  }
}
