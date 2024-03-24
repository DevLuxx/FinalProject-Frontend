import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { TrefleService } from '../Services/trefle.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Plot } from '../interfaces/plot';
import { Plant } from '../interfaces/plant';
import { PlotsService } from '../Services/plots.service';

@Component({
  selector: 'app-plot-detail',
  standalone: true,
  imports: [],
  templateUrl: './plot-detail.component.html',
  styleUrl: './plot-detail.component.css'
})
export class PlotDetailComponent implements OnInit{
  constructor(
    private plantsService: PlantsService,
    private trefleService: TrefleService,
    private plotsService: PlotsService,
    private activatedRoute: ActivatedRoute){}

  paramsSubscription!: Subscription;
  plotItem: Plot | null = null;
  plants: Plant[] | null = null;

  ngOnInit(): void {

    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {

      const id = params['id'];

      this.plotsService.getPlotItem(id).subscribe(plotItem => {
        this.plotItem = plotItem;
      });

      this.plantsService.getPlantsall().subscribe(plants => {
        this.plants = plants;
      });

    })
  }
}
