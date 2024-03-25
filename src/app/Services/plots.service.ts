import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Plot } from '../interfaces/plot';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {
  constructor(private httpClient: HttpClient) { }

  plotsAPI = `${environment.apiDomain}/api/plots`;

  getAllPlots() {
    return this.httpClient.get<Plot[]>(this.plotsAPI)
  }

  getPlotContents(plotId: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plotsAPI}/${plotId}`);
  }

  getPlotItem(id: number): Observable<Plot> {
    return this.httpClient.get<Plot>(`${this.plotsAPI}/plotitem/${id}`);
  }

  updatePlot(plotSpaceId: number, plantId: number) {
    return this.httpClient.put(`${this.plotsAPI}/${plotSpaceId}/${plantId}`, {});
  }

}
