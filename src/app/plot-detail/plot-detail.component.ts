import { Component, OnInit, importProvidersFrom, numberAttribute } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { TrefleService } from '../Services/trefle.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DisplayPlotsComponent } from '../display-plots/display-plots.component';
import { Subscription } from 'rxjs';
import { Plot } from '../interfaces/plot';
import { Plant } from '../interfaces/plant';
import { PlotsService } from '../Services/plots.service';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plot-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatFormFieldModule, MatInputModule, MatOption, MatSelectModule],
  templateUrl: './plot-detail.component.html',
  styleUrl: './plot-detail.component.css'
})
export class PlotDetailComponent implements OnInit{

  constructor(
    private plantsService: PlantsService,
    private trefleService: TrefleService,
    private router: Router,
    private plotsService: PlotsService,
    private activatedRoute: ActivatedRoute){}

    plants$ = this.plantsService.getPlantsall();

  paramsSubscription!: Subscription;
  plotItem = {
    id: 0,
    plantId: 0,
    plantName: "",
    plotSpace: 0,
    plotId: 0
  };
  plants: Plant[] | null = null;

  ngOnInit(): void {

    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {

      const id = params['id'];

      this.plotsService.getPlotItem(id).subscribe(plotItem => {
        this.plotItem = {
          id: plotItem.id,
          plantId: plotItem.plantId,
          plantName: plotItem.plantName,
          plotSpace: plotItem.plotSpace,
          plotId: plotItem.plotId,
        };
      });

      this.plantsService.getPlantsall().subscribe(plants => {
        this.plants = plants;
      });

    })
  }

  updatePlot() {
    const updatedPlot = {
      id: this.plotItem.id,
      plantId: +this.plotItem.plantId,
      plantName: this.plotItem.plantName,
      plotSpace: this.plotItem.plotSpace,
      plotId: this.plotItem.plotId,
    };
  this.plotsService.updatePlot(updatedPlot.plotSpace, this.selectVal).subscribe(() => {
    this.router.navigate(['plots']);
  });
}

selectVal: number = 0;

}