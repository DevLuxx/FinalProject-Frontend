import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';
import { CommonModule } from '@angular/common';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, PlantsComponent,CommonModule,RouterModule,DisplayPlotsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
