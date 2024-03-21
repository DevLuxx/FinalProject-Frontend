import { Routes } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';

export const routes: Routes = [
    { path: 'plants', component: PlantsComponent },
    { path: 'plots', component: DisplayPlotsComponent }
];
