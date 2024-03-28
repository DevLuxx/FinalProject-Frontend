import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { JournalService } from '../Services/journal.service';
import { Journal } from '../interfaces/journal';
@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatFormFieldModule, MatFormFieldModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})

export class JournalComponent {  
  
  constructor(private router: Router, private journalService: JournalService){}  
  
  $journals = this.journalService.getJournalsall();}

