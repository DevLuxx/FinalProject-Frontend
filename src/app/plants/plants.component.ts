import { Component } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {
  constructor(private plantsService: PlantsService){}
  plants$ = this.plantsService.getPlants();

}
