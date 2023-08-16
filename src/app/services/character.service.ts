import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=11&apikey=4b62fe9d7a438e3293147603f6b1d532&hash=5f5d3c998d7b33c5236bf0db62f2660f';
  
  //Consulta API da Marvel via método get para retornar os heróis cadastrados
  public allCharacters(offset: number, name: string): Observable<any> {
    //Trata parâmetros
    if (name) var nameStartsWith: string = '&nameStartsWith=' + name;
    else var nameStartsWith: string = '';
    
    //Realiza chamada da API
    return this.http.get(this.baseUrl + '&offset=' + offset + nameStartsWith).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  //Envio de mensagens popup para alerta
  public showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition:'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  //Tratamento de erros
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
  
}
