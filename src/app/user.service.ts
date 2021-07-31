import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };
  getUser(): Observable<any> {
    return this.http.get(this.baseURL + 'getUser')
  }
  constructor(private http : HttpClient) {}
}

