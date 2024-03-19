import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
