import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Plot } from '../interfaces/plot';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {

  constructor(private plantsService: PlantsService){}
  
    plants$ = this.plantsService.getPlants();
 
    addToPlot(id: Plot){
      this.plantsService.addPlot1(id);
    }
}
