import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import  {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantsComponent,CommonModule,RouterModule,DisplayPlotsComponent, MatSlideToggleModule,MatFormFieldModule,MatInputModule,MatTabsModule,MatButtonModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
