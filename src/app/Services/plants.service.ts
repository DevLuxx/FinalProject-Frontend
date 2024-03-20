import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plant } from '../interfaces/plant';
import { TrefleInfo } from '../interfaces/trefle-info';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }
  backEnd = `${environment.apiDomain}/api/Plants`;
  baseURL = `$https://trefle.io/api/v1/plants`;

  getTrefleInfo(id: number): Observable<TrefleInfo> {
    return this.httpClient.get<TrefleInfo>(`${this.baseURL}/${id}/?token=-mwv_gdmHkcI3oEhRqEqrXqFAmPdwBmuQf3TqddpT3Y.json`);

    // The API says this returns a JSON, but putting JSON in the URL breaks it: https://docs.trefle.io/reference#tag/Plants/operation/listPlants
  }
  getPlants(){
    return this.httpClient.get<Plant[]>(this.backEnd)
  }
}
