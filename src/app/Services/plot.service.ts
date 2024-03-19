import { Injectable } from '@angular/core';
import { PlotModel } from '../Models/plot-model';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostPlotModel } from '../Models/postplot-model';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/plots`;

  getPlots() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<PlotModel[]>(this.baseUrl)
  }

  // this is only used when you want to update the NAME property of a plot. (if you dont add a change name button, then feel free to not use this)
  updatePlot(updatePlot: PlotModel, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatePlot);
  }

  // when a user clicks the "delete plot" button. 
  deletePlot(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  // this is when a user clicks the "add plot" button
  addPlot(newPlot: PostPlotModel): Observable<PlotModel> {
    return this.httpClient.post<PostPlotModel>(this.baseUrl, newPlot);
  }

  // gets plot by id, might not be needed...
  getPlot(id: number): Observable<PlotModel> {
    return this.httpClient.get<PlotModel>(`${this.baseUrl}/${id}`);
  }


  

}
