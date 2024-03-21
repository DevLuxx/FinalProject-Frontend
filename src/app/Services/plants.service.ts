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
  plot1API = `${environment.apiDomain}/api/plot1`;
  plot2API = `${environment.apiDomain}/api/plot2`;
  plot3API = `${environment.apiDomain}/api/plot3`;
  // trefleAPI = `${environment.apiDomain}/api/trefle`;

  getPlants(){
    return this.httpClient.get<Plant[]>(this.plantsAPI)
  }

  getPlot1all() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<Plot[]>(this.plot1API)
  }

    // gets plot by id, might not be needed...
    getPlot1(id: number): Observable<Plot> {
      return this.httpClient.get<Plot>(`${this.plot1API}/${id}`);
    }

  // this is only used when you want to update the NAME property of a plot. (if you dont add a change name button, then feel free to not use this)
  updatePlot1(updatePlot: Plot, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.plot1API}/${id}`, updatePlot);
  }

  // when a user clicks the "delete plot" button.
  deletePlot1(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.plot1API}/${id}`)
  }

  // this is when a user clicks the "add plot" button
  addPlot1(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot1API, newPlot);
  }

  getPlot2all() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<Plot[]>(this.plot2API)
  }

    // gets plot by id, might not be needed...
    getPlot2(id: number): Observable<Plot> {
      return this.httpClient.get<Plot>(`${this.plot2API}/${id}`);
    }

  // this is only used when you want to update the NAME property of a plot. (if you dont add a change name button, then feel free to not use this)
  updatePlot2(updatePlot: Plot, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.plot2API}/${id}`, updatePlot);
  }

  // when a user clicks the "delete plot" button.
  deletePlot2(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.plot2API}/${id}`)
  }

  // this is when a user clicks the "add plot" button
  addPlot2(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot2API, newPlot);
  }

  getPlot3all() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<Plot[]>(this.plot3API)
  }

    // gets plot by id, might not be needed...
    getPlot3(id: number): Observable<Plot> {
      return this.httpClient.get<Plot>(`${this.plot3API}/${id}`);
    }

  // this is only used when you want to update the NAME property of a plot. (if you dont add a change name button, then feel free to not use this)
  updatePlot3(updatePlot: Plot, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.plot3API}/${id}`, updatePlot);
  }

  // when a user clicks the "delete plot" button.
  deletePlot3(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.plot3API}/${id}`)
  }

  // this is when a user clicks the "add plot" button
  addPlot3(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot3API, newPlot);
  }

}
