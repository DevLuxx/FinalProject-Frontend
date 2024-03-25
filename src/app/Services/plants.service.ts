import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plant } from '../interfaces/plant';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }

  plantsAPI = `${environment.apiDomain}/api/Plants`;

  getPlantsall(){
    return this.httpClient.get<Plant[]>(this.plantsAPI)
  }

  getPlant(id: number): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.plantsAPI}/${id}`);
  }

  updatePlant(plant: Plant) {
    return this.httpClient.put(`${this.plantsAPI}/${plant.id}`, plant).subscribe(() => {      
    });
  }
}
