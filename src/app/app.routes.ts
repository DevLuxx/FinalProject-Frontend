import { Routes } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { DisplayPlotsComponent } from './display-plots/display-plots.component';
import { JournalComponent } from './journal/journal.component';
import { PlotDetailComponent } from './plot-detail/plot-detail.component';

export const routes: Routes = [
    { path: 'plants', component: PlantsComponent },
    { path: 'plots', component: DisplayPlotsComponent },
    { path: 'journal', component: JournalComponent },
    { path: 'plotitem/:id', component: PlotDetailComponent },
];
