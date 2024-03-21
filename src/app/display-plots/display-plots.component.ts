import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsService } from '../Services/plants.service';

@Component({
  selector: 'app-display-plots',
  standalone: true,
  imports: [CommonModule],
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

  // updatePlant(id: number, plant: PlantModel) {
  //   this.router.navigate(['update-plant', id], { queryParams: plant });
  // }

  // routeToPlant(id: number) {
  //   this.router.navigate(['plant', id]);
  // }

}
