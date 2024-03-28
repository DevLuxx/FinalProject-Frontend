import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';
import { JournalComponent } from './journal/journal.component';
import { PlantsComponent } from './plants/plants.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantsComponent, CommonModule, RouterModule, DisplayPlotsComponent, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatButtonModule, MatDividerModule, JournalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
