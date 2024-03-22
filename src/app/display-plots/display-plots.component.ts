import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotsService } from '../Services/plots.service';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-display-plots',
  standalone: true,

  imports: [CommonModule, RouterModule],

  templateUrl: './display-plots.component.html',
  styleUrl: './display-plots.component.css'
})
export class DisplayPlotsComponent {

  // constructor(
  //   private plotService: PlotService,

  // plants$ = this.plotService.getPlants();

  // getPlants(id: number) {
  //   this.router.navigate(['plant', id]);
  // }

  // deletePlant(id: number) {

  //   this.plotService.deletePlants(id).subscribe(() => {
  //     this.plants$ = this.plotService.getPlants();
  //   })
  // }

  // updatePlant(id: number, plant: Plant) {
  //   this.router.navigate(['update-plant', id], { queryParams: plant });
  // }

  // routeToPlant(id: number) {
  //   this.router.navigate(['plant', id]);
  // }

}
