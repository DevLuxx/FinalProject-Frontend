import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Plant } from '../interfaces/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Plants`;

  getPlants(){
    return this.httpClient.get<Plant[]>(this.baseUrl)
  }
}
