import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JournalService } from '../Services/journal.service';
import { Journal } from '../interfaces/journal';@Component({
  selector: 'app-journal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './journal-form.component.html',
  styleUrl: './journal-form.component.css'
})
export class JournalFormComponent {
  constructor(
  private journalService: JournalService,
  private router: Router,
  private activatedRoute: ActivatedRoute
) { }

id: number = 0;
date!: Date;
gardener: string = '';
notes: string = '';

addEntry() {  const newEntry ={
    id: this.id,
    date: this.date,
    gardener: this.gardener,
    notes: this.notes
  }  
  
  this.journalService.postJournal(newEntry).subscribe(() => {
    this.router.navigate(['journal']);
  });
}}