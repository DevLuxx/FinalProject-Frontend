import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {

  constructor(private plantsService: PlantsService, private route: ActivatedRoute, private activatedRoute: ActivatedRoute){}

  routeSubscription!: Subscription;
  querySubscription!: Subscription;
  id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); //Just pass a number in here to see if it actually works
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
  plants$ = this.plantsService.getTrefleInfo(this.id);

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnDestroy(): void {

    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
