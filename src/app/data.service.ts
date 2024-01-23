import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json'; // Path to the JSON file within the app directory

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // console.log(this.http.get(this.dataUrl));
    return this.http.get(this.dataUrl);
  }
}
