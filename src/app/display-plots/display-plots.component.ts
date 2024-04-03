import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PlantsService } from '../Services/plants.service';
import { PlotsService } from '../Services/plots.service';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-display-plots',
  standalone: true,

  imports: [CommonModule, RouterModule, MatTabsModule,MatButtonModule],

  templateUrl: './display-plots.component.html',
  styleUrl: './display-plots.component.css'
})
export class DisplayPlotsComponent {


  constructor(
    private plantsService: PlantsService,
    private plotsService: PlotsService,
    private router: Router){}

  plots$ = this.plotsService.getAllPlots();

  routeToPlotItem(id: number) {
    console.log(id);
    this.router.navigate(['plotitem', id]);
  }
}
