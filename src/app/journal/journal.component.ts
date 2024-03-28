import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
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

export class JournalComponent implements OnInit {
  journals$: Observable<Journal[]>;
  newJournal: Journal = { id: null, date: null, gardener: '', notes: '' };

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {
    this.loadJournals();
  }

  loadJournals() {
    this.journals$ = this.journalService.getJournalsall();
  }

  createJournal() {
    if (!this.newJournal.date || !this.newJournal.gardener || !this.newJournal.notes) {
      alert('Please fill in all fields.');
      return;
    }
    this.journalService.postJournal(this.newJournal).subscribe(() => {
      this.loadJournals();
      this.newJournal = { id: null, date: null, gardener: '', notes: '' };
    });
  }

  deleteJournal(id: number) {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.journalService.deleteJournal(id).subscribe(() => {
        this.loadJournals();
      });

    }
  }
}
