import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsService } from '../Services/plants.service';
import { PlotsService } from '../Services/plots.service';
import { Plot } from '../interfaces/plot';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-display-plots',
  standalone: true,

  imports: [CommonModule, RouterModule],

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
