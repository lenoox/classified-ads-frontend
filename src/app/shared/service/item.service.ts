import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from '../model/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseurl = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  CreateItem(data): Observable<Item> {
    return this.http.post<Item>(this.baseurl + '/items/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  GetItem(id): Observable<Item> {
    return this.http.get<Item>(this.baseurl + '/items/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  GetItems(): Observable<Item> {
    let object = {  };

    return this.http.get<Item>(this.baseurl + '/items', {
      params: object
    })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  UpdateItem(id, data): Observable<Item> {
    return this.http.put<Item>(this.baseurl + '/items/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  DeleteItem(id) {
    return this.http.delete<Item>(this.baseurl + '/items/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
