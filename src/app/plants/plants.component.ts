import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PlantsService } from '../Services/plants.service';
import { TrefleService } from '../Services/trefle.service';
import { Plant } from '../interfaces/plant';
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
