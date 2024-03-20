import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plant } from '../interfaces/plant';
import { TrefleInfo } from '../interfaces/trefle-info';
import { Plot } from '../interfaces/plot';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }
  plantsAPI = `${environment.apiDomain}/api/Plants`;
  plotsAPI = `${environment.apiDomain}/api/plots`;
  // trefleAPI = `${environment.apiDomain}/api/trefle`;

  getPlants(){
    return this.httpClient.get<Plant[]>(this.plantsAPI)
  }

  getPlots() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<Plot[]>(this.plotsAPI)
  }

  // this is only used when you want to update the NAME property of a plot. (if you dont add a change name button, then feel free to not use this)
  updatePlot(updatePlot: Plot, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.plotsAPI}/${id}`, updatePlot);
  }

  // when a user clicks the "delete plot" button.
  deletePlot(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.plotsAPI}/${id}`)
  }

  // this is when a user clicks the "add plot" button
  addPlot(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plotsAPI, newPlot);
  }

  // gets plot by id, might not be needed...
  getPlot(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plotsAPI}/${id}`);
  }

}
