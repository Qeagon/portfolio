import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  send(name: string, email: string, message: string): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 2000);
    });
  }

  constructor(private http: HttpClient) {}
}
