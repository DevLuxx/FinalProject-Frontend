import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Journal } from '../interfaces/journal';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private httpClient: HttpClient) { }

  journalAPI = `${environment.apiDomain}/api/journal`;

  getJournalsall(){
    return this.httpClient.get<Journal[]>(this.journalAPI)
  }

  getJournals(id: number): Observable<Journal> {
    return this.httpClient.get<Journal>(`${this.journalAPI}/${id}`);
  }

  postJournal(newJournal: Journal): Observable<Journal> {
    return this.httpClient.post<Journal>(this.journalAPI, newJournal);
  }
}
