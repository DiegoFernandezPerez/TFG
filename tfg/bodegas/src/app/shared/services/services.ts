import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  apiUrl = 'http://localhost:8087';

  constructor(private _http: HttpClient) { }

  public getProductos(): Observable<any> {
    return this._http.get(this.apiUrl + '/rest/usuarios/localidades');
    // return this._http.get(URI);
  }

  public getBlanco(): Observable<any> {
    return this._http.get(this.apiUrl + '/rest/producto/productos')
  } 
  public getRosado(): Observable<any> {
    return this._http.get(this.apiUrl + '/rest/producto/productos')
  }  
  public getTinto(): Observable<any> {
    return this._http.get(this.apiUrl + '/rest/producto/productos')
  }   

  
  

  /* public getImportCircuits(importFilters: any): Observable<any> {
    const URI = this.apiUrl + '/connections_circuits';
    return this.http.post(URI, importFilters);
  }
  public getInfo(): Observable<any> {
    const URI = this.apiUrl + '/rest/usuarios/localidades';
    return this.http.get(URI);
  } */
  private manejarError(e: HttpErrorResponse){
    let mensajeError = ''
    //Diferenciamos si el error es del servidor o más genérico
    if (e.error instanceof ErrorEvent) {
      mensajeError = 'A ocurrido un error:' + e.error
    } else {
      mensajeError = `El servicio Rest retorno: Status: ${e.status}, ` +
            `Body: ${e.error}`
    }
    //Imprimimos el mensaje de error y lo arrojamos médiante una función lambda
    //Esta manerá tenemos que hacerla así cuando trabajamos con Observables.
    console.error(mensajeError)
    return throwError(() => new Error(mensajeError));


  }
 
}
