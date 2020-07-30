import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Site} from '../models/site.interface';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  constructor(private httpClient: HttpClient) { }

  createHash(data: Site): Observable<Site> {
    return this.httpClient
                .post<any>('http://127.0.0.1:8000/api/create',data)
                .pipe(
                  map(res => res)
                );
  }

  getAll(): Observable<Site[]> {
    return this.httpClient
                .get<any>('http://127.0.0.1:8000/api/all')
                .pipe(
                  map(res => res)
                );
  }

  delete(site: Site): Observable<any> {
    return this.httpClient
                .delete<any>('http://127.0.0.1:8000/api/sites/'+site.id);
  }
}
