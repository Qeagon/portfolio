import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);

  send(name: string, email: string, message: string): Observable<void> {
    return this.http.post<void>('/api/contact', { name, email, message });
  }
}