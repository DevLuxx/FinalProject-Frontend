import { Component, OnDestroy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { JournalService } from '../Services/journal.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Journal } from '../interfaces/journal';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule,MatFormFieldModule,MatFormFieldModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent {

  constructor(private journalService: JournalService){}

  $journals = this.journalService.getJournalsall();

}
