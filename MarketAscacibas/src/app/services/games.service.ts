import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Games } from '../models/games';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }
  idGame: number = 0;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGames(): Observable<Games[]>{
    return this.http.get<Games[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  getGameId(id: number): Observable<Games>{
    return this.http.get<Games>(this.url+"/" + id)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
