import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = `${environment.apiBaseUrl}/alticci`
  }

  calculate(n: number): Observable<Object> {
    return this.http.get(`${this.serviceUrl}/${n}`);
  }
}
