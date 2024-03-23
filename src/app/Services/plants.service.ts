import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plant } from '../interfaces/plant';
import { TrefleInfo } from '../interfaces/trefle-info';
import { Plot } from '../interfaces/plot';
import { Journal } from '../interfaces/journal';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }
  plantsAPI = `${environment.apiDomain}/api/Plants`;
  plot1API = `${environment.apiDomain}/api/plot1`;
  plot2API = `${environment.apiDomain}/api/plot2`;
  plot3API = `${environment.apiDomain}/api/plot3`;
  trefleAPI = `${environment.apiDomain}/api/trefle`;
  journalAPI = `${environment.apiDomain}/api/journal`;

    // =================================================================== //

  getPlantsall(){
    return this.httpClient.get<Plant[]>(this.plantsAPI)
  }

  getPlants(id: number): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.plantsAPI}/${id}`);
  }

  updatePlant(updatePlant: Plant, id: number | null) {
    return this.httpClient.put(`${this.plantsAPI}/${id}`, updatePlant);
  }

  // =================================================================== //

  getPlot1all() {
    return this.httpClient.get<Plot[]>(this.plot1API)
  }

  getPlot1(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plot1API}/${id}`);
  }

  updatePlot1(updatePlot: Plot, id: number | null) {
    return this.httpClient.put(`${this.plot1API}/${id}`, updatePlot);
  }

  deletePlot1(id: number) {
    return this.httpClient.delete(`${this.plot1API}/${id}`)
  }

  addPlot1(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot1API, newPlot);
  }

    // =================================================================== //

  getPlot2all() {
    return this.httpClient.get<Plot[]>(this.plot2API)
  }

  getPlot2(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plot2API}/${id}`);
  }

  updatePlot2(updatePlot: Plot, id: number | null) {
    return this.httpClient.put(`${this.plot2API}/${id}`, updatePlot);
  }

  deletePlot2(id: number) {
    return this.httpClient.delete(`${this.plot2API}/${id}`)
  }

  addPlot2(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot2API, newPlot);
  }

  // =================================================================== //

  getPlot3all() {
    return this.httpClient.get<Plot[]>(this.plot3API)
  }

  getPlot3(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plot3API}/${id}`);
  }

  updatePlot3(updatePlot: Plot, id: number | null) {
    return this.httpClient.put(`${this.plot3API}/${id}`, updatePlot);
  }

  deletePlot3(id: number) {
    return this.httpClient.delete(`${this.plot3API}/${id}`)
  }

  addPlot3(newPlot: Plot): Observable<Plot> {
    return this.httpClient.post<Plot>(this.plot3API, newPlot);
  }

    // =================================================================== //

  getTrefle(id: number): Observable<TrefleInfo> {
    return this.httpClient.get<TrefleInfo>(`${this.trefleAPI}/${id}`);
  }

    // =================================================================== //

    getJournalsall(){
      return this.httpClient.get<Journal[]>(this.journalAPI)
    }

    getJournals(id: number): Observable<Journal> {
      return this.httpClient.get<Journal>(`${this.journalAPI}/${id}`);
    }

    postJournal(newJournal: Journal): Observable<Journal> {
      return this.httpClient.post<Journal>(this.journalAPI, newJournal);
    }
}
