import { Component, OnDestroy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { TrefleService } from '../Services/trefle.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Plot } from '../interfaces/plot';
import { Plant } from '../interfaces/plant';
import { TrefleInfo } from '../interfaces/trefle-info';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatDividerModule,MatTableModule,MatCardModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {

  constructor(private plantsService: PlantsService, private trefleService: TrefleService){}

  id: number = 0;
  plants$ = this.plantsService.getPlantsall();

    @Input() value = 0;

    increment(plant: Plant) {
      plant.quantity++;
      this.plantsService.updatePlant(plant);
    }

    decrement(plant: Plant) {
      plant.quantity--;
      this.plantsService.updatePlant(plant);
    }
  }
