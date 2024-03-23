import { Component, OnDestroy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Plot } from '../interfaces/plot';
import { Plant } from '../interfaces/plant';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {

  constructor(private plantsService: PlantsService){}

  id = 269338;

  plants$ = this.plantsService.getPlantsall();
  trefle$ = this.plantsService.getTrefle(this.id);

    @Input() value = 0;

    increment(plant: Plant, quantity: number) {
      this.plantsService.updatePlant(plant, quantity)
      quantity++;
    }

    decrement(plant: Plant, quantity: number) {
      this.plantsService.updatePlant(plant, quantity)
      quantity--;
    }
}
